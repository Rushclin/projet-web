import { ArrowBack } from "@mui/icons-material";
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

export default function UpdateHopital() {
    const navigate = useNavigate();
    const location = useLocation()
    const { user } = useAuthContext();
    const id = location.state.id
    const [hopital, setHopital] = useState({
        name: "",
        email: "",
        password: "12345678",
        latitude: "",
        longitude: "",
        pb: "",
        phone: "",
        description: "",
    })

    useEffect(() => {
        getHopital();
    }, [])

    const getHopital = () => {
        axios.get("https://hanniel-api.herokuapp.com/admin/one/hospital/" + id, {
            headers: { Authorization: `Bearer ${user.token}` },
        }).then((response) => {
            setHopital(response.data.message)
        }).catch((error) => {
            console.log(error)
        })
    }

    const handleChange = (e) => {
        setHopital({ ...hopital, [e.target.name]: e.target.value })
    }

    console.log(hopital)
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
                        startIcon={<ArrowBack />}
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
                                    name="name"
                                    value={hopital.name}
                                    onChange={handleChange}
                                    label="Nom de l'hopital"
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    id="logitude"
                                    value={hopital.longitude}
                                    onChange={handleChange}
                                    name="longitude"
                                    label="Logitude de l'hopital"
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    id="latitude"
                                    name="latitude"
                                    label="Latitide de l'hopital"
                                    fullWidth
                                    value={hopital.latitude}
                                    onChange={handleChange}
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    id="telephone"
                                    name="phone"
                                    onChange={handleChange}
                                    value={hopital.phone}
                                    label="Numero de telephone de l'hopital"
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item md={6} px={1}>
                                <TextField
                                    required
                                    id="telephone"
                                    name="telephone"
                                    label="Telephone de l'hopital"
                                    fullWidth
                                    type="number"
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    id="bp"
                                    name="bp"
                                    label="Boite postale de l'hopital"
                                    fullWidth
                                    onChange={handleChange}
                                    value={hopital.pb}
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    id="email"
                                    name="email"
                                    label="Email de l'hopital"
                                    fullWidth
                                    type="email"
                                    margin="normal"
                                    value={hopital.email}
                                    onChange={handleChange}
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
                                    label="Description de l'hopital"
                                    value={hopital.description}
                                    onChange={handleChange}
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
