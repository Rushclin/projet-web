import { ArrowBack } from "@mui/icons-material";
import {
    Button,
    Card,
    CardMedia,
    Container,
    Grid,
    Stack,
    TableHead,
    Table,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
    TableBody,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Page from "../../components/Page";
import { useAuthContext } from "../../context/userContext";

const ShowMedecin = (props) => {
    const location = useLocation();
    const { user } = useAuthContext();
    const [medecin, setMedecin] = useState({});
    const id = location.state.id;
    const navigate = useNavigate();

    useEffect(() => {
       putMedecin();
    }, []);

    const putMedecin = () => {
        
        axios.put("https://hanniel-api.herokuapp.com/hospital/" + id, {
                userId: user.userId,
                headers: { Authorization: `Bearer ${user.token}` },
            })
            .then((response) => {
                setMedecin(response.data.message);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    console.log(location.state.id);
    console.log(medecin);
    return (
        <Page title="Detail sur les medecin">
            <Container>
                <Stack
                    direction="row"
                    mb={5}
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Typography variant="h5" component="p">
                        Detail Medecin
                    </Typography>
                    <Button variant="contained" startIcon={<ArrowBack />} onClick={() => navigate("/medecin")}>
                        Retour
                    </Button>
                </Stack>
                <Card>
                    <Grid container>
                        <Grid item md={6}>
                            <CardMedia
                                component="img"
                                image={medecin.image}
                                alt={medecin.name}
                            />
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
                                            <TableCell>{medecin.name}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Description </TableCell>
                                            <TableCell>{medecin.description}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Date de naissaznce </TableCell>
                                            <TableCell>{medecin.dateNaiss}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Numero Telephone </TableCell>
                                            <TableCell>{medecin.numero}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Grade </TableCell>
                                            <TableCell>{medecin.grade}</TableCell>
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

export default ShowMedecin;
