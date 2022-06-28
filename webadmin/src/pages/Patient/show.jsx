import { ArrowBack } from "@mui/icons-material";
import {
    Card,
    Container,
    Paper,
    Stack,
    Table,
    TableHead,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
    TableBody,
    Button,
    Grid,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Page from "../../components/Page";
import { useAuthContext } from "../../context/userContext";

const ShowPatient = () => {
    // HOOKS
    useEffect(() => {
        getOnePatient();
    }, []);
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuthContext();

    const id = location.state.id;
    const [patient, setPatient] = useState({});

    const getOnePatient = () => {
        axios
            .get("https://hanniel-api.herokuapp.com/admin/one/patient/" + id, {
                userId: user.userId,
                headers: { Authorization: `Bearer ${user.token}` },
            })
            .then((response) => {
                setPatient(response.data.message);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <Page title="Afficher patient">
            <Container>
                <Stack
                    direction="row"
                    mb={5}
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Typography variant="h5">Afficher un patient</Typography>
                    <Button variant="contained" startIcon={<ArrowBack />} onClick={() => navigate("/patients")}>
                        Retour
                    </Button>
                </Stack>

                <Card>
                    <Grid container>
                        <Grid item md={6} p={2}>
                            <Typography>On doit afficher la photo ici</Typography>
                        </Grid>
                        <Grid item md={6}>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Proprietes </TableCell>
                                            <TableCell>Valeurs</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Noms et Prenoms</TableCell>
                                            <TableCell>
                                                {patient.name + " " + patient.surname}
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>Sexe</TableCell>
                                            <TableCell>{patient.sexe}</TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>Date de naissance</TableCell>
                                            <TableCell>{patient.date}</TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>Telephone</TableCell>
                                            <TableCell>{patient.phone}</TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>Email</TableCell>
                                            <TableCell>{patient.email}</TableCell>
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

export default ShowPatient;
