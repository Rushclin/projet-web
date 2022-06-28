import { Stack, Grid, Typography, Button } from "@mui/material";
import { Container } from "@mui/material";
import Page from "../../components/Page";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Card } from "@mui/material";
import { useState } from "react";
import { useAuthContext } from "../../context/userContext";
import axios from "axios";

const NouvellePharmacie = () => {
    // HOOKS HOOKS
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const [message, setMessage] = useState("");

    // bp pour Boite Postale
    const [newPharmacie, setNewPharmacie] = useState({
        name: "",
        longitude: "",
        latitude: "",
        description: "",
        pb: "",
        email: "",
        password: "12345678",
    });

    // Pur gerer les erreur de saisie
    const [error, setError] = useState(false);
    const [image, setImage] = useState({});

    const handleImage = (e) => {
        console.log("Image", e.target.files[0]);
        setImage(e.target.files[0]);
    };
    const handelChange = (e) => {
        setNewPharmacie({ ...newPharmacie, [e.target.name]: e.target.value });
    };

    const handleReset = () => {
        setNewPharmacie({
            ...newPharmacie,
            name: "",
            longitude: "",
            latitude: "",
            description: "",
            phone: "",
            pb: "",
            email: "",
        });

        setError(false);
    };
    const handleSubmit = (e) => {
        // Arret de la propagation
        e.preventDefault();

        // On doit faire les tests pour la logique metier

        if (newPharmacie.name.trim().length == 0) {
            setError(true);
        }
        if (newPharmacie.longitude.trim().length == 0) {
            setError(true);
        }
        if (newPharmacie.latitude.trim().length == 0) {
            setError(true);
        }
        if (newPharmacie.description.trim().length == 0) {
            setError(true);
        }
        if (newPharmacie.phone.trim().length == 0) {
            setError(true);
        }
        if (newPharmacie.pb.trim().length == 0) {
            setError(true);
        }
        if (newPharmacie.email.trim().length == 0) {
            setError(true);
        }

        if (!error) {
            const data = new FormData();
            data.append("pharmacie", JSON.stringify(newPharmacie));
            data.append("image", image);
            console.log(data)

            axios
                .post("https://hanniel-api.herokuapp.com/admin/c/pharmacy", data, {
                    headers: { Authorization: `Bearer ${user.token}` },
                })
                .then((response) => {
                    console.log("Bien envoye");
                    navigate("/pharmacies");
                    setMessage("Pharmacie creee avec succes");
                })
                .catch((error) => {
                    setMessage("Erreur interne du serveur");
                    console.log(error);
                });
        }
    };

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
                            {message}
                        </Typography>
                    </Box>
                    <Box component="form">
                        <Grid container>
                            <Grid item md={6} px={1}>
                                <TextField
                                    onChange={handelChange}
                                    required
                                    value={newPharmacie.name}
                                    label="Nom pharmacie "
                                    id="name"
                                    margin="normal"
                                    name="name"
                                    fullWidth
                                />
                                <TextField
                                    onChange={handelChange}
                                    required
                                    value={newPharmacie.phone}
                                    label="Telephone "
                                    id="phone"
                                    margin="normal"
                                    name="phone"
                                    fullWidth
                                />
                                <TextField
                                    onChange={handelChange}
                                    required
                                    value={newPharmacie.pb}
                                    label="Boite postale "
                                    id="pb"
                                    margin="normal"
                                    name="pb"
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
                                    id="logo"
                                    type="file"
                                    name="logo"
                                    margin="normal"
                                    fullWidth
                                    onChange={handleImage}
                                    value={newPharmacie.logo}
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
