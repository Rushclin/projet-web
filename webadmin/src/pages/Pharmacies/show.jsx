import {
    Button,
    Card,
    CardMedia,
    Container,
    Grid,
    Stack,
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
                    <Button variant="contained" onClick={() => navigate("/pharmacies")}>
                        Retour
                    </Button>
                </Stack>
                <Card>
                    <Grid container>
                        <Grid item md={6}>
                            <CardMedia component="img" image={pharmacie.logo} />
                        </Grid>
                        <Grid item md={6} p={2} pt={3}>
                            <Typography
                                variant="h6"
                                component="p"
                                style={{
                                    fontSize: "15px",
                                    opacity: "0.5",
                                    paddingBottom: "10px",
                                }}
                            >
                                Detail sur la pharmacie
                            </Typography>
                            <hr />

                            <Typography
                                variant="h6"
                                component="p"
                                style={{ fontSize: "15px", opacity: "0.5", paddingTop: "10px" }}
                            >
                                Nom{" "}
                            </Typography>
                            <Typography>{pharmacie.name}</Typography>

                            <Typography
                                variant="h6"
                                component="p"
                                style={{ fontSize: "15px", opacity: "0.5", paddingTop: "10px" }}
                            >
                                Description
                            </Typography>
                            <Typography>{pharmacie.description}</Typography>

                            <Typography
                                variant="h6"
                                component="p"
                                style={{ fontSize: "15px", opacity: "0.5", paddingTop: "10px" }}
                            >
                                Email
                            </Typography>
                            <Typography>{pharmacie.email}</Typography>

                            <Typography
                                variant="h6"
                                component="p"
                                style={{ fontSize: "15px", opacity: "0.5", paddingTop: "10px" }}
                            >
                                Boite postale
                            </Typography>
                            <Typography>{pharmacie.pb}</Typography>

                            <Typography
                                variant="h6"
                                component="p"
                                style={{ fontSize: "15px", opacity: "0.5", paddingTop: "10px" }}
                            >
                                Telephone
                            </Typography>
                            <Typography>{pharmacie.phone}</Typography>

                            <Typography
                                variant="h6"
                                component="p"
                                style={{ fontSize: "15px", opacity: "0.5", paddingTop: "10px" }}
                            >
                                Lattitude
                            </Typography>
                            <Typography>{pharmacie.latitude}</Typography>

                            <Typography
                                variant="h6"
                                component="p"
                                style={{ fontSize: "15px", opacity: "0.5", paddingTop: "10px" }}
                            >
                                Longitude
                            </Typography>
                            <Typography>{pharmacie.longitude}</Typography>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </Page >
    );
};

export default ShowPharmacie;