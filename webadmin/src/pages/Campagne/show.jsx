import {
    Button,
    Card,
    CardMedia,
    Container,
    Grid,
    Stack,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Page from "../../components/Page";
import { useAuthContext } from "../../context/userContext";
import axios from "axios";

const ShowCampagne = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuthContext();
    const [campagne, setCampagne] = useState({});
    const [hopital, setHopital] = useState({});

    useEffect(() => {
        getCampage();
        getOneHopital(location.state.id);
    }, []);

    console.log("ID", location.state.id);
    console.log("Utilisr", user);
    const id = location.state.id;

    // Recuperer un hoptal avec son ID
    const getOneHopital = (id) => {
        axios
            .get("https://hanniel-api.herokuapp.com/admin/one/hospital/" + id, {
                userId: user.userId,
                headers: { Authorization: `Bearer ${user.token}` },
            })
            .then((response) => {
                setHopital({ ...response.data.message });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    console.log(hopital);

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

    console.log("CAMM", campagne);

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
                        <Grid item md={6} p={2} pt={4}>
                            <Typography
                                component="h3"
                                variant="h6"
                                style={{ textAlign: "center", paddingBottom: "10px" }}
                            >
                                Detail sur la campagne
                            </Typography>

                            <hr />

                            <Typography
                                variant="h6"
                                component="p"
                                style={{ fontSize: "15px", opacity: "0.5", paddingTop: "2px" }}
                            >
                                Description de de la campagne
                            </Typography>
                            <Typography
                                variant="h6"
                                component="h3"
                                style={{
                                    fontSize: "12px",
                                    fontWeight: "100",
                                    paddingLeft: "10px",
                                    paddingBottom: "15px",
                                }}
                            >
                                {campagne.description}
                            </Typography>

                            <Typography
                                variant="h6"
                                component="p"
                                style={{ fontSize: "15px", opacity: "0.5", paddingTop: "2px" }}
                            >
                                Nom de l'hopital
                            </Typography>
                            <Typography
                                variant="h6"
                                component="h3"
                                style={{
                                    fontSize: "12px",
                                    fontWeight: "100",
                                    paddingLeft: "10px",
                                    paddingBottom: "15px",
                                }}
                            >
                                {hopital.name}
                            </Typography>

                            <Typography
                                variant="h6"
                                component="p"
                                style={{ fontSize: "15px", opacity: "0.5", paddingTop: "2px" }}
                            >
                                Responsable de de la campagne
                            </Typography>
                            <Typography
                                variant="h6"
                                component="h3"
                                style={{
                                    fontSize: "12px",
                                    fontWeight: "100",
                                    paddingLeft: "10px",
                                    paddingBottom: "15px",
                                }}
                            >
                                {campagne.dateBegin}
                            </Typography>

                            <Typography
                                variant="h6"
                                component="p"
                                style={{ fontSize: "12px", opacity: "0.5", paddingTop: "2px" }}
                            >
                                Nom de la campagne
                            </Typography>
                            <Typography
                                variant="h6"
                                component="h3"
                                style={{
                                    fontSize: "12px",
                                    fontWeight: "100",
                                    paddingLeft: "10px",
                                    paddingBottom: "15px",
                                }}
                            >
                                {campagne.name}
                            </Typography>

                            <Typography
                                variant="h6"
                                component="p"
                                style={{ fontSize: "15px", opacity: "0.5", paddingTop: "2px" }}
                            >
                                Date de debut de de la campagne
                            </Typography>
                            <Typography
                                variant="h6"
                                component="h3"
                                style={{
                                    fontSize: "12px",
                                    fontWeight: "100",
                                    paddingLeft: "10px",
                                    paddingBottom: "15px",
                                }}
                            >
                                {campagne.dateBegin}
                            </Typography>

                            <Typography
                                variant="h6"
                                component="p"
                                style={{ fontSize: "15px", opacity: "0.5", paddingTop: "2px" }}
                            >
                                Date de fin de de la campagne
                            </Typography>
                            <Typography
                                variant="h6"
                                component="h3"
                                style={{
                                    fontSize: "12px",
                                    fontWeight: "100",
                                    paddingLeft: "10px",
                                    paddingBottom: "15px",
                                }}
                            >
                                {campagne.dateEnd}
                            </Typography>

                            <Typography
                                variant="h6"
                                component="p"
                                style={{ fontSize: "15px", opacity: "0.5", paddingTop: "2px" }}
                            >
                                Hopital
                            </Typography>
                            <Typography
                                variant="h6"
                                component="h3"
                                style={{
                                    fontSize: "12px",
                                    fontWeight: "100",
                                    paddingLeft: "10px",
                                    paddingBottom: "15px",
                                }}
                            >
                                {campagne.hospitalId}
                            </Typography>

                            <Typography
                                variant="h6"
                                component="p"
                                style={{ fontSize: "15px", opacity: "0.5", paddingTop: "2px" }}
                            >
                                Temps de de la campagne
                            </Typography>
                            <Typography
                                variant="h6"
                                component="h3"
                                style={{
                                    fontSize: "12px",
                                    fontWeight: "100",
                                    paddingLeft: "10px",
                                    paddingBottom: "15px",
                                }}
                            >
                                {campagne.hour}
                            </Typography>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </Page>
    );
};

export default ShowCampagne;
