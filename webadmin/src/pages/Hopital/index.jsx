import { Stack } from "@mui/material";
import MUIDataTable from "mui-datatables";
import { Container } from "@mui/material";
import Page from "../../components/Page";
import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ButtonGroup } from "@mui/material";
import { Card } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { DeleteRounded, Edit } from "@mui/icons-material";
import { useAuthContext } from "../../context/userContext";

export default function ListeHopitaux() {
    // LES HOOKS
    const navigate = useNavigate();
    const [hopitaux, setHopitaux] = useState([])
    const { user } = useAuthContext()


    const columns = [
        {
            name: "id",
            label: "ID",
            option: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "nom",
            label: "Nom",
            option: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "longitude",
            label: "Longitude",
            option: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "latitude",
            label: "Latitude",
            option: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "telephone",
            label: "Telephone",
            option: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "bp",
            label: "Boite postale",
            option: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "email",
            label: "Email",
            option: {
                filter: true,
                sort: true,
            },
        },
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
                                    <VisibilityIcon />
                                </Button>
                                <Button
                                    variant="contained"
                                    size="small"
                                    color="secondary"
                                    onClick={() => { navigate("/hopital/update") }}
                                >
                                    <Edit />
                                </Button>
                                <Button color="error" variant="contained" size="small">
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

    const data = [
        {
            id: "0",
            nom: "Hopital de Distric",
            longitude: "0X435678",
            latitude: "0X456789o",
            telephone: "645678906789",
            bp: "02 DSCHANG",
            email: "hopitald@gmail.com",
        },
        {
            id: "1",
            nom: "Hopital du Centre",
            longitude: "0X2345678",
            latitude: "03456",
            telephone: "690156365",
            bp: "02 BAGANGTE",
            email: "hopitald@hotmail.com",
        },
    ];

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
                    <Button variant="contained" onClick={() => navigate("/hopital/create")}>
                        Nouvel hopital
                    </Button>
                </Stack>

                <Card>
                    <MUIDataTable
                        title={"Liste des hopitaux"}
                        data={data}
                        columns={columns}
                        options={options}
                    />
                </Card>
            </Container>
        </Page>
    );
}
