import { Stack } from "@mui/material";
import MUIDataTable from "mui-datatables";
import { Container } from "@mui/material";
import Page from "../../components/Page";
import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ButtonGroup } from "@mui/material";
import { Card } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { DeleteRounded, Edit, HdrPlus, PlusOne } from "@mui/icons-material";
import { useAuthContext } from "../../context/userContext";
import axios from "axios";
import { useConfirm } from "material-ui-confirm";

export default function ListeHopitaux() {

    // LES HOOKS
    useEffect(() => {
        getAllHopital();
    }, []);

    const navigate = useNavigate();
    const [hopitaux, setHopitaux] = useState([]);
    const { user } = useAuthContext();
    const confirm = useConfirm();

    const getAllHopital = () => {
        axios
            .get("https://hanniel-api.herokuapp.com/admin/all/hospital", {
                userId: user.userId,
                headers: { Authorization: `Bearer ${user.token}` },
            })
            .then((response) => {
                setHopitaux(response.data.message);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // Pour la suppression
    const handleDelete = (id) => {
        confirm({
            description: "Est-vous sur de vouloir continuer ?",
            title: "Suppression d'un hopital",
        })
            .then((rep) => {
                // On lance l'appel http ici
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const columns = [
        { name: "name", label: "Nom", option: { filter: true, sort: true } },
        {
            name: "longitude",
            label: "Longitude",
            option: { filter: true, sort: true },
        },
        {
            name: "latitude",
            label: "Latitude",
            option: { filter: true, sort: true },
        },
        { name: "phone", label: "Telephone", option: { filter: true, sort: true } },
        {
            name: "bp",
            label: "Boite postale",
            option: { filter: true, sort: true },
        },
        { name: "email", label: "Email", option: { filter: true, sort: true } },
        {
            name: "actions",
            label: "Actions",
            options: {
                empty: true,
                customBodyRenderLite: (index, id) => {
                    return (
                        <>
                            <ButtonGroup variant="contained">
                                <Button variant="contained" size="small">
                                    <VisibilityIcon onClick={() => navigate("/hopital/show", { state: { id: hopitaux[index].id } })} />
                                </Button>
                                <Button
                                    variant="contained"
                                    size="small"
                                    color="warning"
                                    onClick={() => {
                                        navigate("/hopital/update", { state: { id: hopitaux[index].id } });
                                    }}
                                >
                                    <Edit />
                                </Button>
                                <Button
                                    color="error"
                                    variant="contained"
                                    size="small"
                                    onClick={() => handleDelete(hopitaux[index].id)}
                                >
                                    <DeleteRounded />
                                </Button>
                            </ButtonGroup>
                        </>
                    );
                },
            },
        },
    ];

    const options = {
        filterType: "checkbox",
    };

    return (
        <Page title="Liste des hopitaux">
            <Container>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={5}
                >
                    <Typography variant="h5">Liste des hopitaux</Typography>
                    <Button
                        variant="contained"
                        onClick={() => navigate("/hopital/create")}
                    >
                        Nouvel hopital
                    </Button>
                </Stack>

                <Card>
                    <MUIDataTable
                        title={"Liste des hopitaux"}
                        data={hopitaux}
                        columns={columns}
                        options={options}
                    />
                </Card>
            </Container>
        </Page>
    );
}
