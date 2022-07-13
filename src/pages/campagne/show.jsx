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

const ShowCampagne = (props) => {
    const location = useLocation();
    const { user } = useAuthContext();
    const [campagne, setCampagne] = useState({});
    const id = location.state.id;
    const navigate = useNavigate();

    useEffect(() => {
        putCampagne();
    }, []);

    const  putCampagne = () => {
        
        axios.put("https://hanniel-api.herokuapp.com/hospital/u/campaign/" + id, {
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

    console.log(location.state.id);
    console.log(campagne);
    return (
        <Page title="Detail des campagnes">
            <Container>
                <Stack
                    direction="row"
                    mb={5}
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Typography variant="h5" component="p">
                        Detail sur les campagnes
                    </Typography>
                    <Button variant="contained" startIcon={<ArrowBack />} onClick={() => navigate("/campagne")}>
                        Retour à la page d' accueil
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
                                            <TableCell>Valeurs</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Nom </TableCell>
                                            <TableCell>{campagne.name}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Description </TableCell>
                                            <TableCell>{hopital.description}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Date de desbut </TableCell>
                                            <TableCell>{campagne.dateBegin}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Date de fin </TableCell>
                                            <TableCell>{campagne.dateEnd}</TableCell>
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
