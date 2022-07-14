import {
    Button,
    Card,
    Container,
    Grid,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState ,FormControl,InputLabel,MenuItem} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Page from "../../components/Page";
import { useAuthContext } from "../../context/userContext";

export default function UpdateMedecin() {
    const [data, setData] = useState({});
    const location = useLocation();
    const { user } =useAuthContext()
    const navigate = useNavigate();
    const id = location.state.id
    const [medecin, setMedecin] = useState({
        dateNaiss: '', 
        numero: '',
        description: '', 
        hospitalId: user.userId, 
        name : '', 
       grade: '',
        sexe: '',
    })
    const [image, setImage] = useState({})
    const getMedecin = (e) => { 
        axios.get("https://hanniel-api.herokuapp.com/hospital/g/medecin"+id, {
            userId : user.userId,
            headers: {Authorization: `Bearer ${user.token}`}
        }).then((response) => {
            setMedecin(response.data.message)
        }).catch((error) => {
            console.log(error)
        })
      }
      const handleImage = (e) => {
        setImage(e.target.files[0])
    }
    const handleChange = (e) =>{
        setMedecin({ ...medecin, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateMedecin()
    }


    const updateMedecin = () =>{
        const data =new FormData()

    data.append("medecin",JSON.stringify(medecin))
        data.append("image",image)
        axios.put(`https://hanniel-api.herokuapp.com/hospital/ ${id}`, data, {
            userId: user.userId,  
            headers: {Authorization: `Bearer ${user.token}`}
        }).then((response) => {
            console.log( "modifier les medecins")
            navigate("/medecin/") 
        }).catch((error) => {
            console.log(error)
        })
      
    }
    console.log(medecin)
    console.log(medecin)

  
      
     
    return (
        <Page title="Mise a jour du medecin">
            <Container>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={5}
                >
                    <Typography variant="h5"> Mise a jour des Medecins </Typography>
                    <Button
                        variant="contained"
                        onClick={() => {
                            navigate("/medecin");
                        }}
                    >
                        Retour
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

                    <Box component="form">
                        <Grid container>
                            <Grid item md={6} px={1}>
                               
                                 <TextField
                                    required
                                    value={medecin.name}
                                    id="name"
                                    name="name"
                                    label="Nom du medecin"
                                    fullWidth
                                    margin="normal"
                                    onChange={handleChange}
                                />
                                
                               
                                 
                                <TextField
                                    required
                                    id="dateNaiss"
                                    name="dateNaiss"
                                    label="Date de naissance du medecin"
                                    fullWidth
                                    margin="normal"
                                    value={medecin.dateNaiss}
                                    onChange={handleChange}
                                />
                                         <FormControl fullWidth style={{ marginBottom:"15px"}}>
                                        <InputLabel name="demo1">Statut</InputLabel>
                                        <select>
                                            labelId="demo1"
                                    id="demo1"
                                    name="statut"
                                   label="Statut"
                                    value={medecin.statut}
                                    onChange={handleChange}
                                    <MenuItem value={1}>Masculin</MenuItem>
                                    <MenuItem value={1}>Feminin</MenuItem>
                                    </select>
                                    </FormControl>
                                
                                 <TextField
                                    required
                                    id="description"
                                    name="description"
                                    label="Description du medecin"
                                    fullWidth
                                    margin="normal"
                                    value={medecin.description}
                                    onChange={handleChange}
                                />
                                 <TextField
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
                            <TextField
                                    required
                                    id="email"
                                    name="email"
                                    label="Email de medecin"
                                    fullWidth
                                    type="email"
                                    value={medecin.email}
                                    onChange={handleChange}
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    id="photo"
                                    name="photo"
                                    fullWidth
                                    type="file"
                                    margin="normal"
                                />
                                  <TextField
                                    required
                                    id="numero"
                                    name="numero"
                                    label="Numero de telephone du medecin"
                                    fullWidth
                                    margin="normal"
                                    value={medecin.numero}
                                    onChange={handleChange}
                                />
                            
                            </Grid>
                            <Grid item md={12} px={1} py={2}>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    style={{ margin: "10px" }}
                                >
                                    Modifier
                                </Button>
                                <Button type="reset" variant="contained" color="error">
                                    Annuler
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Card>
            </Container>
        </Page>
    );
}
