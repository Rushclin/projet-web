import { Stack, Grid, Typography, Button } from "@mui/material";
import { Container } from "@mui/material";
import Page from "../../components/Page";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Card } from "@mui/material";
import { useState } from "react";

const NouvellePharmacie = () => {
    // HOOKS HOOKS
    // bp pour Boite Postale
    const [newPharmacie, setNewPharmacie] = useState({
        nom: "",
        longitude: "",
        latitude: "",
        description: "",
        telephone: "",
        bp: "",
        email: "",
    });

    // Pur gerer les erreur de saisie
    const [error, setError] = useState(false);

    const handelChange = (e) => {
        setNewPharmacie({ ...newPharmacie, [e.target.name]: e.target.value });
    };

    const handleReset = () => {
        setNewPharmacie({
            ...newPharmacie,
            nom: "",
            longitude: "",
            latitude: "",
            description: "",
            telephone: "",
            bp: "",
            email: "",
        });

        setError(false);
    };
    const handleSubmit = (e) => {
        // Arret de la propagation
        e.preventDefault();

        // On doit faire les tests pour la logique metier

        if (!newPharmacie.nom.trim()) {
            setError(true);
        }
        if (!newPharmacie.longitude.trim()) {
            setError(true);
        }
        if (!newPharmacie.latitude.trim()) {
            setError(true);
        }
        if (!newPharmacie.description.trim()) {
            setError(true);
        }
        if (!newPharmacie.telephone.trim()) {
            setError(true);
        }
        if (!newPharmacie.bp.trim()) {
            setError(true);
        }
        if (!newPharmacie.email.trim()) {
            setError(true);
        }
        console.log(newPharmacie);
    };
    const navigate = useNavigate();

    return (
        <Page title="Nouvelle pharmacie">
            <Container>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={5}
                >
                    <Typography variant="h5">Nouvelle pharmacie</Typography>
                    <Button variant="contained" onClick={() => navigate("/pharmacies")}>
                        Retour
                    </Button>
                </Stack>
                <Card>
                    <Box mx={2} my={2}>
                        <Typography
                            variant="h6"
                            color="error"
                            style={{ fontWeight: "100" }}
                        >
                            {error && "Veuillez remplir tous les champs"}
                        </Typography>
                    </Box>
                    <Box component="form">
                        <Grid container>
                            <Grid item md={6} px={1}>
                                <TextField
                                    onChange={handelChange}
                                    required
                                    value={newPharmacie.nom}
                                    label="Nom pharmacie "
                                    id="nom"
                                    margin="normal"
                                    name="nom"
                                    fullWidth
                                />
                                <TextField
                                    onChange={handelChange}
                                    required
                                    value={newPharmacie.telephone}
                                    label="Telephone "
                                    id="telephone"
                                    margin="normal"
                                    name="telephone"
                                    fullWidth
                                />
                                <TextField
                                    onChange={handelChange}
                                    required
                                    value={newPharmacie.bp}
                                    label="Boite postale "
                                    id="bp"
                                    margin="normal"
                                    name="bp"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={6} px={1}>
                                <TextField
                                    onChange={handelChange}
                                    required
                                    value={newPharmacie.email}
                                    label="Email "
                                    id="email"
                                    margin="normal"
                                    name="email"
                                    fullWidth
                                />
                                <TextField
                                    onChange={handelChange}
                                    required
                                    value={newPharmacie.latitude}
                                    label="Latitude "
                                    id="latitude"
                                    margin="normal"
                                    name="latitude"
                                    fullWidth
                                />
                                <TextField
                                    onChange={handelChange}
                                    required
                                    value={newPharmacie.longitude}
                                    label="Longitude "
                                    id="longitude"
                                    margin="normal"
                                    name="longitude"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={12} px={1}>
                                <TextField
                                    id="description"
                                    name="description"
                                    label="Decription de la pharmacie "
                                    multiline
                                    fullWidth
                                    rows={2}
                                    margin="normal"
                                    onChange={handelChange}
                                    required
                                    value={newPharmacie.description}
                                />
                            </Grid>
                            <Grid item md={12}>
                                <Button
                                    onClick={handleSubmit}
                                    type="submit"
                                    variant="contained"
                                    style={{
                                        marginBottom: "15px",
                                        marginLeft: "10px",
                                        marginRight: "10px",
                                    }}
                                >
                                    Sauvegarder
                                </Button>
                                <Button
                                    onClick={handleReset}
                                    variant="contained"
                                    color="error"
                                    style={{
                                        marginBottom: "15px",
                                        marginLeft: "10px",
                                        marginRight: "10px",
                                    }}
                                >
                                    Annuler
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Card>
            </Container>
        </Page>
    );
};

export default NouvellePharmacie;
