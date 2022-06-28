import {
    Button,
    Card,
    CardMedia,
    Container,
    Grid,
    Stack,
    Table,
    TableCell,
    TableHead,
    TableContainer,
    TableRow,
    Typography,
    TableBody,
    Switch,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Page from "../../components/Page";
import { useAuthContext } from "../../context/userContext";

const ShowMedicament = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuthContext();
    const id = location.state.id;
    const pharmacieId = location.state.pharmacieId
    console.log("Iddddd", pharmacieId)

    useEffect(() => {
        getMedicament();
        getPharmcie();
    }, []);

    const [medicament, setMedicament] = useState({});
    const [pharmacie, setPharmacie] = useState({});

    const getMedicament = () => {
        axios
            .get("https://hanniel-api.herokuapp.com/admin/one/medicament/" + id, {
                headers: { Authorization: `Bearer ${user.token}` },
            })
            .then((response) => {
                setMedicament(response.data.message);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getPharmcie = () => {
        axios
            .get(
                "https://hanniel-api.herokuapp.com/admin/one/pharmacy/" +
                pharmacieId,
                {
                    userId: user.userId,
                    headers: { Authorization: `Bearer ${user.token}` },
                }
            )
            .then((response) => {
                setPharmacie(response.data.message);
                console.log(response.data.message);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    console.log(medicament);
    console.log(pharmacie);

    return (
        <Page title="Afficher medicament">
            <Container>
                <Stack
                    direction="row"
                    mb={5}
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Typography variant="h5">Afficher un medicament</Typography>
                    <Button variant="contained" onClick={() => navigate("/medicaments")}>
                        Retour
                    </Button>
                </Stack>
                <Card>
                    <Grid contained>
                        <Grid item md={6}>
                            <CardMedia component="img" alt={medicament.name} />
                        </Grid>
                        <Grid item md={6}>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Proprietes</TableCell>
                                            <TableCell>Valeurs</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Nom</TableCell>
                                            <TableCell>{medicament.name}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Laboratoire</TableCell>
                                            <TableCell>{medicament.lab}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Pharmacie</TableCell>
                                            <TableCell>{pharmacie.name}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Prix</TableCell>
                                            <TableCell>{medicament.price}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Dose</TableCell>
                                            <TableCell>{medicament.dose}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Statut</TableCell>
                                            <TableCell>
                                                <Switch checked={medicament.statut && true} disabled />
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </Page>
    );
};

export default ShowMedicament;
