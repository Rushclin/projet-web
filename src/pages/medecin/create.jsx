
import { Add, ArrowBack, RestoreRounded } from "@mui/icons-material";
import {
    Alert,
    Button,
    Card,
    Container,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
}
 from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import axios from "axios";
import Page from "../../components/Page";
import { useAuthContext } from "../../context/userContext";

export default function CreerMedecin() {
   const { user } = useAuthContext();
   const [medecin, setMedecin] = useState({
    dateBegin: '', 
        numero: '',
        description: '', 
        hospitalId: user.userId, 
        name : '', 
        sexe: '',
        specialite:'',
        password:'123456',
   })

   const [image,setImage] = useState({})
   const handleImage = (e) =>{
    setImage(e.target.files[0])
   }
   const [loading,setLoading] = useState(false)
   const navigate = useNavigate();
   const handleChange = (e) => {
     setMedecin(prevstate => ({ ...prevstate, [e.target.name] : e.target.value}));
   }
   console.log(medecin)
   const handleReset = () => {
    setMedecin({
        dateBegin: '', 
        numero: '',
        description: '', 
        hospitalId: user.userId, 
        name : '',
        sexe: '',
        specialite:'',
        password:'123456',

    })
   }

   const handleSubmit = (event) => {
    event.preventDefault()
 
 //    On fait les verification ici
    

    const data = new FormData()

    data.append("medecin", JSON.stringify(medecin))
    data.append("image", image)

    axios.post("https://hanniel-api.herokuapp.com/hospital/c/medecin", data, {
        /* userId: user.userId,  */
        headers: {Authorization: `Bearer ${user.token}`}
    }).then((response) => {
        console.log("La requete a marchee")
        navigate("/medecin/") 
    }).catch((error) => {
        console.log(error)
    })
    console.log("On soummet le formulaire")
}
    return (
        <Page title="Creation du medecin">
            <Container>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={5}
                >
                    <Typography variant="h5">Medecin </Typography>
                    <Button
                        variant="contained"
                        onClick={() => {
                            navigate("/medecin");
                        }}
                    >
                        Retour sur la page d'accueil
                    </Button>
                </Stack>

                <Card>
                    <Box mx={2} my={1}>
                        <Typography>
                            {
                                // On doit afficher l'erreur ici
                            }
                        </Typography>
                    </Box>

                    <Box >
                    <ValidatorForm onSubmit={handleSubmit}>
                        <Grid container>
                            <Grid item md={6} px={1}>
                               
                                 <TextValidator
                                    required
                                    id="name"
                                    onChange={handleChange}
                                    value={medecin.name}
                                    name="name"
                                    label="Nom du medecin"
                                    fullWidth
                                    margin="normal"
                                    validators={["required"]}
                                    errorMessage={["cechamps est obligatoire"]}
                                />
                                
                               
                                 
                                <TextValidator
                                    required
                                    id="dateBegin"
                                    name="dateBegin"
                                    value={medecin.dateBegin}
                                    onChange={handleChange}
                                    label="date de naissance du medecin"
                                    fullWidth
                                    margin="normal"
                                    type="date"
                                   />
                            
                                 <TextValidator
                                    required
                                    id="description"
                                    name="description"
                                    value={medecin.description}
                                    onChange={handleChange}
                                    label="Description du medecin"
                                    fullWidth
                                    margin="normal"
                                    validators={["required"]}
                                    errorMessage={["cechamps est obligatoire"]}
                                />
                                  <TextValidator
                                    required
                                    id="specialite"
                                    name="specialite"
                                    value={medecin.specialite}
                                    onChange={handleChange}
                                    label="Specialité du medecin"
                                    fullWidth
                                    margin="normal"
                                    validators={["required"]}
                                    errorMessage={["cechamps est obligatoire"]}
                                />
                                   
                            </Grid>
                            <Grid item md={6} px={1}>
                            <TextValidator
                                   required
                                   onChange={handleChange}
                                   value={medecin.email}
                                   id="email"
                                   name="email"
                                   label="Email du medein"
                                   fullWidth
                                   type="email"
                                   margin="normal"
                                   validators={["required", "isEmail"]}
                                   errorMessages={[
                                       "Ce champ est obligatoire",
                                       "Email non valide"
                                   ]}
                                />
                                <TextValidator
                                    required
                                    id="photo"
                                    name="photo"
                                    fullWidth
                                    type="file"
                                    margin="normal"
                                    onChange={handleImage}
                                    value={medecin.photo}
                                />
                                  <TextValidator
                                    required
                                    id="numero"
                                    name="numero"
                                    value={medecin.numero}
                                    onChange={handleChange}
                                    label="Numero de telephone du medecin"
                                    fullWidth
                                    margin="normal"
                                    validators={["required", "matchRegexp:^[0-9]{9,}"]}
                                    errorMessages={[
                                        "Ce champ est obligatoire",
                                        "9 chiffres au minimum"
                                    ]}
                                />
                               <FormControl fullWidth style={{ marginBottom:"50px"}}>
                                         <InputLabel name="sexe">Sexe</InputLabel>
                                         <Select
                                         labelId="sexe"
                                         label="Sexe"
                                         name="sexe"
                                         value={medecin.sexe}
                                         onChange={handleChange}>
                                            <MenuItem value={1}>Masculin</MenuItem>
                                            <MenuItem value={0}>Feminin</MenuItem>
                                         </Select>


                                    </FormControl>
                            </Grid>
                            <Grid item md={12} px={1} py={2}>
                            <Button
                                        variant="contained"
                                        type="submit"
                                        startIcon={<Add />}
                                        style={{ margin: "10px" }}
                                        disabled={loading}
                                    >
                                        Sauvegarder
                                    </Button>
                                    <Button
                                        type="reset"
                                        variant="contained"
                                        color="error"
                                        startIcon={<RestoreRounded />}
                                        onClick={handleReset}
                                    >
                                        Annuler
                                    </Button>
                            </Grid>
                        </Grid>
                        </ValidatorForm>
                    </Box>
                </Card>
            </Container>
        </Page>
    );
}
