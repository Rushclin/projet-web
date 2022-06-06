import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Card } from "@mui/material";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Page from "../../components/Page";
import { useAuthContext } from "../../context/userContext";

export default function UpdatePharmacie() {

    // LES HOOKS 
    const [error, setError] = useState(false);
    const location = useLocation()
    const { user } = useAuthContext();

    useEffect(() => {
        getPharmcie()
    }, [])

    console.log(location.state.id)
    const id = location.state.id

    // Recuperation de la pharmacie en ligne 
    const getPharmcie = () => {
        axios
            .get("https://hanniel-api.herokuapp.com/admin/one/pharmacy/" + id, {
                userId: user.userId,
                headers: { Authorization: `Bearer ${user.token}` },
            })
            .then((response) => {
                setPharmacieUpdate(response.data.message);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    const [pharmacieUpdate, setPharmacieUpdate] = useState({
        name: "",
        longitude: "",
        latitude: "",
        description: "",
        phone: "",
        pb: "",
        email: "",
    });

    const handleChange = (e) => {
        setPharmacieUpdate({ ...pharmacieUpdate, [e.target.name]: e.target.value });
    };

    const handleReset = () => {
        setPharmacieUpdate({
            ...pharmacieUpdate,
            name: "",
            longitude: "",
            latitude: "",
            description: "",
            phone: "",
            bp: "",
            email: "",
        })
        setError(false)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!pharmacieUpdate.name.trim()) {
            setError(true);
        }
        if (!pharmacieUpdate.longitude.trim()) {
            setError(true);
        }
        if (!pharmacieUpdate.latitude.trim()) {
            setError(true);
        }
        if (!pharmacieUpdate.description.trim()) {
            setError(true);
        }
        if (!pharmacieUpdate.phone.trim()) {
            setError(true);
        }
        if (!pharmacieUpdate.bp.trim()) {
            setError(true);
        }
        if (!pharmacieUpdate.email.trim()) {
            setError(true);
        }
    };
    // Les fonctions
    const navigate = useNavigate();
    return (
        <Page title="Modifier pharmacie">
            <Container>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={5}
                >
                    <Typography variant="h5">Modifier une pharmacie</Typography>
                    <Button variant="contained" onClick={() => navigate("/pharmacies")}>
                        Retour
                    </Button>
                </Stack>
                <Card>
                    <Box mx={2} my={2}>
                        <Typography
                            variant="h5"
                            color="error"
                            style={{ fontWeight: "100" }}
                        >
                            {
                                error && "Veuillez remplir tous les champs"
                            }
                        </Typography>
                    </Box>
                    <Box component="form">
                        <Grid container>
                            <Grid item md={6} px={1}>
                                <TextField
                                    label="Nom de la pharmacie "
                                    value={pharmacieUpdate.name}
                                    fullWidth
                                    id="nom"
                                    margin="normal"
                                    name="name"
                                    required
                                    onChange={handleChange}
                                />
                                <TextField
                                    onChange={handleChange}
                                    required
                                    value={pharmacieUpdate.phone}
                                    label="Telephone "
                                    id="phone"
                                    margin="normal"
                                    name="phone"
                                    fullWidth
                                    type="number"
                                />
                                <TextField
                                    onChange={handleChange}
                                    required
                                    value={pharmacieUpdate.pb}
                                    label="Boite postale "
                                    id="pb"
                                    margin="normal"
                                    name="pb"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={6} px={1}>
                                <TextField
                                    onChange={handleChange}
                                    required
                                    value={pharmacieUpdate.email}
                                    label="Email "
                                    id="email"
                                    margin="normal"
                                    name="email"
                                    fullWidth
                                />
                                <TextField
                                    onChange={handleChange}
                                    required
                                    value={pharmacieUpdate.latitude}
                                    label="Latitude "
                                    id="latitude"
                                    margin="normal"
                                    name="latitude"
                                    fullWidth
                                />
                                <TextField
                                    onChange={handleChange}
                                    required
                                    value={pharmacieUpdate.longitude}
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
                                    onChange={handleChange}
                                    required
                                    value={pharmacieUpdate.description}
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
}
