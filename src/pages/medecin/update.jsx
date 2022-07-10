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
import React from "react";
import { useNavigate } from "react-router-dom";
import Page from "../../components/Page";

export default function UpdateMedecin() {
    const navigate = useNavigate();
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
                                    id="prenom"
                                    name="prenom"
                                    label="Nom du medecin"
                                    fullWidth
                                    margin="normal"
                                />
                                
                               
                                 
                                <TextField
                                    required
                                    id="date_naissance"
                                    name="date_naissance"
                                    label="date de naissance du medecin"
                                    fullWidth
                                    margin="normal"
                                />
                                 <TextField
                                    required
                                    id="sexe"
                                    name="sexe"
                                    label="Sexe medecin"
                                    fullWidth
                                    margin="normal"
                                />
                                 <TextField
                                    required
                                    id="description"
                                    name="description"
                                    label="Description du medecin"
                                    fullWidth
                                    margin="normal"
                                />
                                
                                
                            </Grid>
                            <Grid item md={6} px={1}>
                            <TextField
                                    required
                                    id="email"
                                    name="email"
                                    label="email de medecin"
                                    fullWidth
                                    type="email"
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
                                />
                                <TextField
                                required
                                id="grade"
                                name="grade"
                                label="grade du medecin "
                                fullWidth
                                margin="normal"
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
