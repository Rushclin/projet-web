import {
    Alert,
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
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Page from "../../components/Page";
import { useAuthContext } from "../../context/userContext";

export default function CreerHopital() {
    // HOOKS
    const { user } = useAuthContext();
    const [hopital, setHopital] = useState({
        name: "",
        email: "",
        password: "12345678",
        latitude: "",
        longitude: "",
        bp: "",
        phone: "",
        description: "",
    });
    const [error, setError] = useState(false);
    const [image, setImage] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setHopital({ ...hopital, [e.target.name]: e.target.value });
    };

    const handleReset = () => {
        setHopital({
            ...hopital,
            name: "",
            email: "",
            latitude: "",
            longitude: "",
            bp: "",
            phone: "",
            description: "",
        });
        setError(false);
    };

    const handleImage = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (hopital.name.trim().length == 0) {
            setError(true);
        }
        if (hopital.email.trim().length == 0) {
            setError(true);
        }
        if (hopital.latitude.trim().length == 0) {
            setError(true);
        }
        if (hopital.longitude.trim().length == 0) {
            setError(true);
        }
        if (hopital.bp.trim().length == 0) {
            setError(true);
        }
        if (hopital.phone.trim().length == 0) {
            setError(true);
        }

        if (!error) {
            const data = new FormData();
            data.append("hospital", JSON.stringify(hopital));
            data.append("logo", image);
            console.log(hopital);

            axios
                .post("https://hanniel-api.herokuapp.com/admin/c/hospital", data, {
                    headers: { Authorization: `Bearer ${user.token}` },
                })
                .then((response) => {
                    console.log("Bien envoye");
                    navigate("/hopital");
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <Page title="Nouvel hoptital">
            <Container>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={5}
                >
                    <Typography variant="h5">Nouvel hopital</Typography>
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
                        {error && (
                            <Alert severity="error">Veuillez remplir tous les champs</Alert>
                        )}
                    </Box>

                    <Box component="form">
                        <Grid container>
                            <Grid item md={6} px={1}>
                                <TextField
                                    required
                                    onChange={handleChange}
                                    value={hopital.name}
                                    id="name"
                                    name="name"
                                    label="Nom l'hopital"
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    onChange={handleChange}
                                    value={hopital.longitude}
                                    id="longitude"
                                    name="longitude"
                                    label="Longitude de l'hopital"
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    onChange={handleChange}
                                    value={hopital.latitude}
                                    id="latitude"
                                    name="latitude"
                                    label="Latitide de la l'hopital"
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item md={6} px={1}>
                                <TextField
                                    required
                                    onChange={handleChange}
                                    value={hopital.bp}
                                    id="bp"
                                    name="bp"
                                    label="Boite postale de la l'hopital"
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    onChange={handleChange}
                                    value={hopital.email}
                                    id="email"
                                    name="email"
                                    label="Email de la l'hopital"
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
                                    onChange={handleImage}
                                    value={hopital.logo}
                                />
                            </Grid>
                            <Grid item md={12} px={1}>
                                <TextField
                                    required
                                    onChange={handleChange}
                                    value={hopital.phone}
                                    id="phone"
                                    name="phone"
                                    label="Numero de telephone l'hopital"
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item md={12} px={1}>
                                <TextField
                                    onChange={handleChange}
                                    value={hopital.description}
                                    id="description"
                                    name="description"
                                    label="Description de la l'hopital"
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
                                    onClick={handleSubmit}
                                >
                                    Sauvegarder
                                </Button>
                                <Button
                                    type="reset"
                                    variant="contained"
                                    color="error"
                                    onClick={handleReset}
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
}
