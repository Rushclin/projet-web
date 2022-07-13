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
import React, { useEffect, useState } from "react";
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
    useEffect(()=>{
     putMedecin();
    },[])
         const putMedecin = () =>{
            axios.put("https://hanniel-api.herokuapp.com/hospital/", data, {
                /* userId: user.userId,  */
                headers: {Authorization: `Bearer ${user.token}`}
            }).then((response) => {
                setMedecin(response.data.message)
            }).catch((error) => {
                console.log(error)
            })
          
        }
        const handleChange = (e) =>{
            setMedecin({ ...medecin, [e.target.name]: e.target.value})
        }
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
                                 <TextField
                                    required
                                    id="sexe"
                                    name="sexe"
                                    label="Sexe medecin"
                                    fullWidth
                                    margin="normal"
                                    value={medecin.sexe}
                                    onChange={handleChange}
                                />
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
                                <TextField
                                required
                                id="grade"
                                name="grade"
                                label="grade du medecin "
                                fullWidth
                                margin="normal"
                                value={medecin.grade}
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
