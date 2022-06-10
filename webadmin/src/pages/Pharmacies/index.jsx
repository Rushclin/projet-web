import MUIDataTable from "mui-datatables";
import { DeleteRounded, Edit } from "@mui/icons-material";
import { ButtonGroup, Card, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Page from "../../components/Page";
import { useAuthContext } from "../../context/userContext";
import axios from "axios";
import { useConfirm } from "material-ui-confirm";

export default function ListePharmacie() {
    // LES HOOKS
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const [pharmacies, setPharmacy] = useState([]);
    const confirm = useConfirm();
    const [confirmDelete, setconfirmDelete] = useState(false)

    useEffect(() => {
        getAllParmacie();
    }, [confirmDelete]);


    const getAllParmacie = () => {
        axios
            .get("https://hanniel-api.herokuapp.com/admin/all/pharmacy", {
                userId: user.userId,
                headers: { Authorization: `Bearer ${user.token}` },
            })
            .then((response) => {
                console.log(response.data);
                setPharmacy([...response.data.message]);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    console.log(user.token)

    const handleDelete = (id) => {
        confirm({
            description: "Voulez-vous vraiment supprimer ? ",
            title: "Etes vous sure ?",
        })
            .then((resp) => {
                axios.delete("https://hanniel-api.herokuapp.com/admin/d/pharmacy/" + id, {
                    userId: user.userId,
                    headers: { Authorization: `Bearer ${user.token}` },
                }).then((response) => {
                    console.log(response.data.message)
                    setconfirmDelete(!confirmDelete)
                }).catch((error) => {
                    console.log(error)
                })
            })
            .catch((error) => console.log(error));
    };

    // Avec MUIDataTable On doit charger les donnees
    const column = [
        { name: "name", label: "Nom", option: { filter: true, sort: true } },
        { name: "phone", label: "Telephone", option: { filter: true, sort: true } },
        {
            name: "pb",
            label: "Boite postale",
            option: { filter: true, sort: true },
        },
        { name: "email", label: "Email", option: { filter: true, sort: true } },
        {
            name: "actions",
            label: "Actions",
            options: {
                empty: true,
                customBodyRenderLite: (dataIndex, id) => {
                    return (
                        <>
                            <ButtonGroup variants="contained">
                                <Button
                                    variant="contained"
                                    size="small"
                                    onClick={() =>
                                        navigate("/pharmacies/show", {
                                            state: { id: pharmacies[dataIndex].id },
                                        })
                                    }
                                >
                                    <VisibilityIcon />
                                </Button>
                                {/* <Button
                                    variant="contained"
                                    size="small"
                                    color="warning"
                                    onClick={() => navigate("/pharmacies/update", { state: { id: pharmacies[dataIndex].id } })}
                                >
                                    <Edit />
                                </Button> */}
                                <Button
                                    color="error"
                                    variant="contained"
                                    size="small"
                                    onClick={() => handleDelete(pharmacies[dataIndex].id)}
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
                        data={pharmacies}
                        columns={column}
                        options={options}
                    />
                </Card>
            </Container>
        </Page>
    );
}
