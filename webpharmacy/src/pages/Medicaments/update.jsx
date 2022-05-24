import Page from "../../components/Page";
import StackComponent from "../components/StackComponent";
import {
    Button,
    Card,
    Container,
    Divider,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    Switch,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";
import Scrollbar from "../../components/Scrollbar";
import { Add, RemoveCircleOutlined } from "@mui/icons-material";
import { useState } from "react";

const UpdateMedicament = () => {
    // HOOKS
    const [newMedicament, setNewMedicamt] = useState({
        nom: "",
        dose: "",
        laboratoire: "",
        statut: 0,
        prix: "",
        poids: "",
    });

    const handleChange = (e) => {
        console.log(newMedicament);

        setNewMedicamt({ ...newMedicament, [e.target.name]: e.target.value });
    };

    const handelReset = () => {
        // Reinitialise tout le state
        setNewMedicamt({
            ...newMedicament,
            nom: "",
            dose: "",
            laboratoire: "",
            statut: '',
            prix: "",
            poids: "",
        });
    };

    const handleAdd = () => {
        // On doit faire toutes les verificationc ici
        const message = "";
        //Avec le controle sur le formulaire, on peut juste traiter ici
        if (!newMedicament.nom.trim()) {
            console.log("Medicament vide");
        }

        alert("BOUTON MODIFIER CLIQUE")
    };

    return (
        <Page title="Mise a jour medicament">
            <Container>
                <StackComponent
                    label="Retour"
                    description="Mise a jour du medicament"
                    icon={false}
                    route="/medicament"
                />
                <Card style={{ padding: "20px" }}>
                    <Scrollbar>
                        <Typography variant="subTitle2">
                            Remplissez le formulaire pour modifier le medicament
                        </Typography>
                        <Divider />

                        <Grid container spacing={2} style={{ marginTop: "15px" }}>
                            <Grid item xs={6}>
                                <TextField
                                    onChange={handleChange}
                                    value={newMedicament.nom}
                                    helperText={(!newMedicament.nom.trim() || newMedicament.nom.length < 3) ? "Le champ est obligatoire et 3 caracteres min" : ""}
                                    /* helperText="Le champ est obligatoire" */
                                    name="nom"
                                    fullWidth
                                    label="Nom"
                                    style={{ marginBottom: "15px" }}
                                />
                                <TextField
                                    onChange={handleChange}
                                    value={newMedicament.dose}
                                    helperText={(!newMedicament.dose.trim() || newMedicament.dose.length < 3) ? "Le champ est obligatoire et 3 caracteres min" : ""}
                                    name="dose"
                                    fullWidth
                                    label="Dose"
                                    style={{ marginBottom: "15px" }}
                                />
                                <TextField
                                    onChange={handleChange}
                                    value={newMedicament.laboratoire}
                                    name="laboratoire"
                                    fullWidth
                                    label="Laboratoire"
                                    style={{ marginBottom: "15px" }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth style={{ marginBottom: "15px" }}>
                                    <InputLabel name="demo-1">Statut</InputLabel>
                                    <Select
                                        labelId="demo-1"
                                        id="demo-1"
                                        label="Statut"
                                        name="statut"
                                        value={newMedicament.statut}
                                        onChange={handleChange}
                                        helperText="kjl"
                                    >
                                        <MenuItem value={1}>Disponible</MenuItem>
                                        <MenuItem value={0}>Non disponible</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField
                                    onChange={handleChange}
                                    value={newMedicament.prix}
                                    name="prix"
                                    fullWidth
                                    label="Prix"
                                    type="number"
                                    style={{ marginBottom: "15px" }}
                                />
                                <TextField
                                    onChange={handleChange}
                                    value={newMedicament.poids}
                                    name="poids"
                                    fullWidth
                                    label="Poids"
                                    type="number"
                                    style={{ marginBottom: "15px" }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-evenly"
                                    mt={3}
                                >
                                    <Button
                                        onClick={handelReset}
                                        color="error"
                                        variant="contained"
                                        startIcon={<RemoveCircleOutlined />}
                                    >
                                        Annuler
                                    </Button>
                                    <Button
                                        onClick={handleAdd}
                                        variant="contained"
                                        startIcon={<Add />}
                                    >
                                        Modifier
                                    </Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Scrollbar>
                </Card>
            </Container>
        </Page>
    );
};

export default UpdateMedicament;
