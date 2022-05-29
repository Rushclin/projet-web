import MUIDataTable from "mui-datatables";
import { DeleteRounded, Edit } from "@mui/icons-material";
import { ButtonGroup, Card, Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { Container } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Page from "../../components/Page";

export default function ListePharmacie() {
    // LES HOOKS
    const navigate = useNavigate();

    // Avec MUIDataTable On doit charger les donnees
    const column = [
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
                customBodyRenderLite: (dataIndex, id) => {
                    return (
                        <>
                            <ButtonGroup variants="contained">
                                <Button variant="contained" size="small">
                                    <VisibilityIcon />
                                </Button>
                                <Button variant="contained" size="small" color="secondary" onClick={() => navigate("/pharmacies/update")}>
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
            nom: "Pharmacie du centre",
            telephone: "6901398333",
            bp: "123 Bafoussam",
            email: "mail@fmaie.com",
        },
        {
            id: "1",
            nom: "Pharmacie du centre",
            telephone: "6901398333",
            bp: "123 Bafoussam",
            email: "mail@fmaie.com",
        },
    ];

    return (
        <Page title="Liste des pharmacies">
            <Container>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={5}
                >
                    <Typography variant="h5">Liste des pharmacies</Typography>
                    <Button
                        variant="contained"
                        onClick={() => navigate("/pharmacies/create")}
                    >
                        Nouveau
                    </Button>
                </Stack>

                <Card>

                    <MUIDataTable
                        title={"Liste des pharmacies"}
                        data={data}
                        columns={column}
                        options={options}
                    />

                </Card>
            </Container>
        </Page>
    );
}
