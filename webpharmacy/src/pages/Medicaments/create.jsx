
import { Add, ArrowBack, CollectionsBookmarkRounded, RestoreRounded } from "@mui/icons-material";
import { Button, Card, Container, Grid, Stack, TextField, Typography, disabled, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Box } from "@mui/material";
import axios from "axios";
import { ca } from "date-fns/locale";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Page from "../../components/Page";
import { useAuthContext } from "../../context/userContext";

const NouveauMedicament = () => {

    const { user } = useAuthContext()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const [medicament, setMedicament] = useState({
        name: "",
        dose: "",
        lab: "",
        status: 0,
        price: "",
        quantite: "",
        pharmacyId: user.userId
    })

    const [image, setImage] = useState({})

    const handleImage = (e) => {
        setImage(e.target.files[0])
    }
    const handleChange = (e) => {
        setMedicament({ ...medicament, [e.target.name]: e.target.value })
    }
    console.log(medicament)

    const handleReset = () => {
        setMedicament({
            name: "",
            dose: "",
            lab: "",
            status: 0,
            price: "",
            quantite: "",
            pharmacyId: user.userId
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const data = new FormData()

        data.append("medicament", JSON.stringify(medicament))
        console.log(data.get("medicament"))
        axios.post("https://hanniel-api.herokuapp.com/pharmacy/c/medicament", data, {
            userId: user.userId,
            headers: { Authorization: `Bearer ${user.token}` }
        }).then((response) => {
            console.log("La requete a marchee")
            navigate("/medicament")
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <Page title="Nouveau medicament">
            <Container>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={5}
                >
                    <Typography variant="h5">Nouveau medicament</Typography>
                    <Button
                        variant="contained"
                        onClick={() => {
                            navigate("/medicament");
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
                                        value={medicament.name}
                                        id="name"
                                        name="name"
                                        label="Nom du medicament"
                                        fullWidth
                                        margin="normal"
                                        validators={["required"]}
                                        errorMessage={["ce champs est obligatoire"]}
                                    />
                                    <TextValidator
                                        required
                                        onChange={handleChange}
                                        id="dose"
                                        value={medicament.dose}
                                        name="dose"
                                        label="dose du medicament"
                                        fullWidth
                                        margin="normal"
                                        validators={["required"]}
                                        errorMessage={["cechamps est obligatoire"]}
                                    />

                                    <TextValidator
                                        required
                                        onChange={handleChange}
                                        id="lab"
                                        name="lab"
                                        value={medicament.lab}
                                        label="laboratoire du medicament"
                                        fullWidth
                                        margin="normal"
                                        validators={["required"]}
                                        errorMessage={["cechamps est obligatoire"]}

                                    />
                                </Grid>
                                <Grid item md={6} px={1}>
                                    <FormControl fullWidth style={{ marginBottom: "15px" }}>
                                        <InputLabel name="status">Statut</InputLabel>
                                        <Select
                                            labelId="status"
                                            id="status"
                                            label="Statut"
                                            name="status"
                                            value={medicament.status}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={1}>Disponible</MenuItem>
                                            <MenuItem value={0}>Non disponible</MenuItem>
                                        </Select>
                                    </FormControl>

                                    <TextValidator
                                        required
                                        onChange={handleChange}
                                        id="price"
                                        value={medicament.price}
                                        name="price"
                                        label="prix du medicament"
                                        fullWidth
                                        margin="normal"
                                        validators={["required"]}
                                        errorMessage={["cechamps est obligatoire"]}
                                    />

                                    <TextValidator
                                        required
                                        onChange={handleChange}
                                        id="quantite"
                                        name="quantite"
                                        value={medicament.quantite}
                                        label="quantite du medicament"
                                        fullWidth
                                        margin="normal"
                                        validators={["required"]}
                                        errorMessage={["cechamps est obligatoire"]}
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
                                    <Button type="reset" variant="contained" color="error"
                                        onClick={handleReset}>
                                        startIcon={<RestoreRounded />}
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

export default NouveauMedicament