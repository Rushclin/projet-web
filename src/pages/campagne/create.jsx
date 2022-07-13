import { Add, ArrowBack, CollectionsBookmarkRounded, RestoreRounded } from "@mui/icons-material";
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
import { ca } from "date-fns/locale";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Page from "../../components/Page";
import { useAuthContext } from "../../context/userContext";

export default function CreerCampagne() {

    const {user} = useAuthContext()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const [campagne, setCampagne] = useState({
        dateBegin: '', 
        dateEnd: '',
        description: '', 
        hospitalId: user.userId, 
        hour: '', 
        name : '', 
        responsable: '', 
    })
    const [image, setImage] = useState({})

    const handleImage = (e) => {
        setImage(e.target.files[0])
    }

    const handleChange = (e) => {
        setCampagne({...campagne, [e.target.name]: e.target.value})
    }

    console.log(campagne)

    const handleReset = () => {
        setCampagne({
            dateBegin: '', 
            dateEnd: '',
            description: '', 
            hospitalId: '', 
            hour: '', 
            name : '', 
            responsable: '', 
        })
    }
   

    const handleSubmit = (event) => {
        event.preventDefault()
     
     //    On fait les verification ici
        

        const data = new FormData()

        data.append("campaign", JSON.stringify(campagne))
        data.append("image", image)

        axios.post("https://hanniel-api.herokuapp.com/hospital/c/campaign", data, {
            /* userId: user.userId,  */
            headers: {Authorization: `Bearer ${user.token}`}
        }).then((response) => {
            console.log("La requete a marchee")
            navigate("/campagne/") 
    }).catch((error) => {
            console.log(error)
        })
        console.log("On soumet le formulaire")


    }

    return (
        <Page title="Nouvelle campagne">
            <Container>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={5}
                >
                    <Typography variant="h5">Nouvelle campagne</Typography>
                    <Button
                        variant="contained"
                        onClick={() => {
                            navigate("/campagne");
                        }}
                        startIcon={<ArrowBack />}
                    >
                        Retour
                    </Button>
                </Stack>

                <Card>
                    <Box mx={2} my={2}>
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
                                    onChange={handleChange}
                                    value={campagne.name}
                                    id="name"
                                    name="name"
                                    label="Nom de la campagne"
                                    fullWidth
                                    margin="normal"
                                    validators={["required"]}
                                    errorMessage={["cechamps est obligatoire"]}
                                />
                                  <TextValidator
                                   required
                                      onChange={handleChange}
                                    id="description"
                                    value={campagne.description}
                                    name="description"
                                    label="Description de la campagne"
                                    fullWidth
                                    rows={2}
                                    multiline
                                    margin="normal"
                                    validators={["required"]}
                                    errorMessage={["cechamps est obligatoire"]}
                                />
                                 
                                <TextValidator
                                    required
                                    onChange={handleChange}
                                    id="dateBegin"
                                    name="dateBegin"
                                    value={campagne.dateBegin}
                                    label="date de debut de la campagne"
                                    fullWidth
                                    margin="normal"
                                    type="date"
                                    
                                />
                                  </Grid>
                                  <Grid item md={6} px={1}>
                                  <TextValidator
                                    required
                                    onChange={handleChange}
                                    id="responsable"
                                   value={campagne.responsable}
                                    name="responsable"
                                    label="responsable de la campagne"
                                    fullWidth
                                    margin="normal"
                                    validators={["required"]}
                                    errorMessage={["cechamps est obligatoire"]}
                                />
                             
                                  <TextValidator
                                    required
                                    onChange={handleChange}
                                    id="dateEnd"
                                    value={campagne.dateEnd}
                                    name="dateEnd"
                                    label="date de la fin de la campagne"
                                    fullWidth
                                    margin="normal"
                                    type="date"
                                />
                                   
                              <TextValidator
                                    required
                                    onChange={handleImage}
                                    id="image"
                                    name="image"
                                    value={campagne.image}
                                    fullWidth
                                    type="file"
                                    margin="normal"
                                />
                            
                            </Grid>
                          
                            <Grid item md={12} px={1} py={2}>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    startIcon={<Add />}
                                    style={{ margin: "10px" }}
                                    onClick={ handleSubmit}
                                    disabled={ loading }
                                    >
                                
                                    Sauvegarder
                                </Button>
                                <Button type="reset" variant="contained" color="error"
                                 onClick={handleReset}>
                                    startIcon={<RestoreRounded/>}
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
