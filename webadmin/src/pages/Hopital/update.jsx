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

export default function UpdateHopital() {
    const navigate = useNavigate();
    return (
        <Page title="Mise a jour hoptital">
            <Container>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={5}
                >
                    <Typography variant="h5">Mise a jour hopital</Typography>
                    <Button
                        variant="contained"
                        onClick={() => {
                            navigate("/hopital");
                        }}
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

                    <Box component="form">
                        <Grid container>
                            <Grid item md={6} px={1}>
                                <TextField
                                    required
                                    id="nom"
                                    name="nom"
                                    label="Nom pharmacie"
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    id="logitude"
                                    name="longitude"
                                    label="Logitude pharmacie"
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    id="latitude"
                                    name="latitude"
                                    label="Latitide de la pharmacie"
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    id="telephone"
                                    name="telephone"
                                    label="Numero de telephone pharmacie"
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item md={6} px={1}>
                                <TextField
                                    required
                                    id="telephone"
                                    name="telephone"
                                    label="Telephone pharmacie"
                                    fullWidth
                                    type="number"
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    id="bp"
                                    name="bp"
                                    label="Boite postale de la pharmacie"
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    id="email"
                                    name="email"
                                    label="Email de la pharmacie"
                                    fullWidth
                                    type="email"
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    id="logo"
                                    name="logo"
                                    fullWidth
                                    type="file"
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item md={12} px={1}>
                                <TextField
                                    id="description"
                                    name="description"
                                    label="Description de la pharmacie"
                                    fullWidth
                                    rows={2}
                                    multiline
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
