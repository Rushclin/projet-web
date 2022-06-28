import { ArrowBack } from "@mui/icons-material";
import {
    Button,
    Card,
    CardMedia,
    Container,
    Grid,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Page from "../../components/Page";
import { useAuthContext } from "../../context/userContext";

const ShowPharmacie = () => {
    const { user } = useAuthContext();
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.state.id;
    const [pharmacie, setPharmacie] = useState({});
    // Useffect
    useEffect(() => {
        getPharmcie();
    }, []);

    const getPharmcie = () => {
        axios
            .get("https://hanniel-api.herokuapp.com/admin/one/pharmacy/" + id, {
                userId: user.userId,
                headers: { Authorization: `Bearer ${user.token}` },
            })
            .then((response) => {
                setPharmacie(response.data.message);
                console.log("Pharmacie ", response.data.message)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Page title="Detail pharmacie">
            <Container>
                <Stack
                    direction="row"
                    mb={5}
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Typography variant="h5" component="p">
                        Detail de la pharmacie
                    </Typography>
                    <Button startIcon={<ArrowBack />} variant="contained" onClick={() => navigate("/pharmacies")}>
                        Retour
                    </Button>
                </Stack>
                <Card>
                    <Grid container>
                        <Grid item md={6}>
                            <CardMedia component="img" image={pharmacie.logo} />
                        </Grid>
                        <Grid item md={6}>
                            <Typography style={{ paddingTop: 10, textAlign: 'center', paddingBottom: 10 }}>Detail</Typography><hr />
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                Proprietes
                                            </TableCell>
                                            <TableCell>
                                                Valeur
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Nom</TableCell>
                                            <TableCell>{pharmacie.name}</TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>Description</TableCell>
                                            <TableCell>{pharmacie.description}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Email</TableCell>
                                            <TableCell>{pharmacie.email}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Boite postale</TableCell>
                                            <TableCell>{pharmacie.pb}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Telephone</TableCell>
                                            <TableCell>{pharmacie.phone}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Latitude</TableCell>
                                            <TableCell>{pharmacie.latitude}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Longitude</TableCell>
                                            <TableCell>{pharmacie.longitude}</TableCell>
                                        </TableRow>

                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </Page >
    );
};

export default ShowPharmacie;