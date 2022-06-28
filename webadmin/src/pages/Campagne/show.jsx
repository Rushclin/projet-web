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
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Page from "../../components/Page";
import { useAuthContext } from "../../context/userContext";
import axios from "axios";

const ShowCampagne = () => {
    useEffect(() => {
        getCampage();
        getOneHopital();
    }, []);

    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuthContext();
    const [campagne, setCampagne] = useState({});
    const [hopital, setHopital] = useState({});

    const id = location.state.id;
    const hopitalId = location.state.hopitalId;

    // Recuperer un hoptal avec son ID
    const getOneHopital = () => {
        axios
            .get(
                "https://hanniel-api.herokuapp.com/admin/one/hospital/" + hopitalId,
                {
                    userId: user.userId,
                    headers: { Authorization: `Bearer ${user.token}` },
                }
            )
            .then((response) => {
                setHopital(response.data.message);
                console.log(response.data.message);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getCampage = () => {
        axios
            .get("https://hanniel-api.herokuapp.com/admin/one/campaign/" + id, {
                userId: user.userId,
                headers: { Authorization: `Bearer ${user.token}` },
            })
            .then((response) => {
                setCampagne(response.data.message);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Page title="Afficher une campagne">
            <Container>
                <Stack
                    direction="row"
                    mb={5}
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Typography variant="h5">Afficher une campagne</Typography>
                    <Button variant="contained" onClick={() => navigate("/campagnes")}>
                        Retour
                    </Button>
                </Stack>

                <Card>
                    <Grid container>
                        <Grid item md={6}>
                            <CardMedia
                                component="img"
                                image={campagne.image}
                                alt={campagne.name}
                            />
                        </Grid>
                        <Grid item md={6}>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Proprietes</TableCell>
                                            <TableCell>Valeur</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Nom</TableCell>
                                            <TableCell>{campagne.name}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Description</TableCell>
                                            <TableCell>{campagne.description}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Responsable</TableCell>
                                            <TableCell>{campagne.responsable}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Hopital</TableCell>
                                            <TableCell>{hopital.name}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Debut</TableCell>
                                            <TableCell>{campagne.dateBegin}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Fin</TableCell>
                                            <TableCell>{campagne.dateEnd}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Heure par jour</TableCell>
                                            <TableCell>{campagne.hour}</TableCell>
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

export default ShowCampagne;
