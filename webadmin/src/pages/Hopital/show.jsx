import { Button, Card, CardMedia, Container, Grid, Stack, TableHead, Table, TableCell, TableContainer, TableRow, Typography, TableBody } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Page from "../../components/Page";
import { useAuthContext } from "../../context/userContext";

const ShowHopital = (props) => {
    const location = useLocation();
    const { user } = useAuthContext();
    const [hopital, setHopital] = useState({});
    const id = location.state.id;
    const navigate = useNavigate();

    useEffect(() => {
        getHopital();
    }, []);

    const getHopital = () => {
        axios
            .get("https://hanniel-api.herokuapp.com/admin/one/hospital/" + id, {
                userId: user.userId,
                headers: { Authorization: `Bearer ${user.token}` },
            })
            .then((response) => {
                setHopital(response.data.message);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    console.log(location.state.id);
    console.log(hopital);
    return (
        <Page title="Detatil hopital">
            <Container>
                <Stack
                    direction="row"
                    mb={5}
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Typography variant="h5" component="p">Detail de l'hopital</Typography>
                    <Button variant="contained" onClick={() => navigate("/hopital")}>Retour</Button>
                </Stack>
                <Card>
                    <Grid container>
                        <Grid item md={6}>
                            <CardMedia component="img" image={hopital.logo} alt={hopital.name} />
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
                                            <TableCell>Nom </TableCell>
                                            <TableCell>{hopital.name}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Telephone </TableCell>
                                            <TableCell>{hopital.phone}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Email </TableCell>
                                            <TableCell>{hopital.email}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Description </TableCell>
                                            <TableCell>{hopital.description}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Latitude </TableCell>
                                            <TableCell>{hopital.latitude}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Logitude </TableCell>
                                            <TableCell>{hopital.longitude}</TableCell>
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

export default ShowHopital;
