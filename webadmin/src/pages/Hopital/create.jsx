import { Add, ArrowBack, RestoreRounded } from "@mui/icons-material";
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
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
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
    const [image, setImage] = useState({});
    const [loading, setLoading] = useState(false)
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
    };

    const handleImage = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)

        const data = new FormData();
        data.append("hospital", JSON.stringify(hopital));
        data.append("image", image);

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
                        startIcon={<ArrowBack />}
                    >
                        Retour
                    </Button>
                </Stack>

                <Card>
                    <Box>
                        <ValidatorForm onSubmit={handleSubmit}>
                            <Grid container>
                                <Grid item md={6} px={1}>
                                    <TextValidator
                                        required
                                        onChange={handleChange}
                                        value={hopital.name}
                                        id="name"
                                        name="name"
                                        label="Nom l'hopital"
                                        fullWidth
                                        margin="normal"
                                        validators={["required"]}
                                        errorMessages={[
                                            "Ce champ est obligatoire",
                                        ]}
                                    />
                                    <TextValidator
                                        required
                                        onChange={handleChange}
                                        value={hopital.longitude}
                                        id="longitude"
                                        name="longitude"
                                        label="Longitude de l'hopital"
                                        fullWidth
                                        type="number"
                                        margin="normal"
                                        validators={["required"]}
                                        errorMessages={[
                                            "Ce champ est obligatoire",
                                        ]}
                                    />
                                    <TextValidator
                                        required
                                        onChange={handleChange}
                                        value={hopital.latitude}
                                        id="latitude"
                                        name="latitude"
                                        label="Latitide de la l'hopital"
                                        fullWidth
                                        type="number"
                                        margin="normal"
                                        validators={["required"]}
                                        errorMessages={[
                                            "Ce champ est obligatoire",
                                        ]}
                                    />
                                </Grid>
                                <Grid item md={6} px={1}>
                                    <TextValidator
                                        required
                                        onChange={handleChange}
                                        value={hopital.bp}
                                        id="bp"
                                        name="bp"
                                        label="Boite postale de la l'hopital"
                                        fullWidth
                                        margin="normal"
                                        validators={["required"]}
                                        errorMessages={[
                                            "Ce champ est obligatoire",
                                        ]}
                                    />
                                    <TextValidator
                                        required
                                        onChange={handleChange}
                                        value={hopital.email}
                                        id="email"
                                        name="email"
                                        label="Email de la l'hopital"
                                        fullWidth
                                        type="email"
                                        margin="normal"
                                        validators={["required", "isEmail"]}
                                        errorMessages={[
                                            "Ce champ est obligatoire",
                                            "Email non valide"
                                        ]}
                                    />
                                    <TextField
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
                                    <TextValidator
                                        required
                                        onChange={handleChange}
                                        value={hopital.phone}
                                        id="phone"
                                        name="phone"
                                        label="Numero de telephone l'hopital"
                                        fullWidth
                                        type="number"
                                        margin="normal"
                                        validators={["required", "matchRegexp:^[0-9]{9,}"]}
                                        errorMessages={[
                                            "Ce champ est obligatoire",
                                            "9 chiffres au minimum"
                                        ]}
                                    />
                                </Grid>
                                <Grid item md={12} px={1}>
                                    <TextValidator
                                        onChange={handleChange}
                                        value={hopital.description}
                                        id="description"
                                        name="description"
                                        label="Description de la l'hopital"
                                        fullWidth
                                        rows={2}
                                        multiline
                                        margin="normal"
                                        validators={["required",]}
                                        errorMessages={[
                                            "Ce champ est obligatoire",
                                        ]}
                                    />

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
