import {
    Button,
    ButtonGroup,
    Card,
    Container,
    Stack,
    Switch,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Page from "../../components/Page";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MUIDataTable from "mui-datatables";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/userContext";
import axios from "axios";

const ListeMedicament = () => {
    const navigate = useNavigate();
    const [medicaments, setMedicaments] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        getAllMedicament();
    }, []);

    const getAllMedicament = () => {
        axios
            .get("https://hanniel-api.herokuapp.com/admin/all/medicament", {
                userId: user.userId,
                headers: { Authorization: `Bearer ${user.token}` },
            })
            .then((response) => {
                setMedicaments(response.data.message);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    console.log(medicaments);

    const columns = [
        {
            name: "name",
            label: "Nom",
            option: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "dose",
            label: "Dose",
            option: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "lab",
            label: "Laboratoire",
            option: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "price",
            label: "Prix (FCFA)",
            option: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "poids",
            label: "Status",
            options: {
                customBodyRenderLite: (index, id) => {
                    return (
                        <>
                            {medicaments[index].statut ? <Typography variant="p" component="p">Disponible</Typography> : <Typography variant="p" component="p">Non disponible</Typography>}

                        </>
                    );
                },
            },
        },
        {
            name: "actions",
            label: "Actions ",
            options: {
                customBodyRenderLite: (index, id) => {
                    return (
                        <>
                            <ButtonGroup variants="contained">
                                <Button
                                    variant="contained"
                                    size="small"
                                    onClick={() => {
                                        navigate("/medicaments/show", {
                                            state: {
                                                id: medicaments[index].id,
                                                pharmacieId: medicaments[index].phamarcyUid,
                                            },
                                        });
                                    }}
                                >
                                    <VisibilityIcon />
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
            nom: "Paracetamol",
            dose: "1000",
            laboratoire: "Lana derms",
            prix: "345678",
            poids: "100",
        },
    ];

    return (
        <Page title="Liste des medicaments">
            <Container>
                <Stack direction="row" mb={5} alignItems="center">
                    <Typography variant="h5">
                        Liste des medicaments de toutes les pharmacies
                    </Typography>
                </Stack>

                <Card>
                    <MUIDataTable
                        data={medicaments}
                        title={"Liste des medicaments"}
                        options={options}
                        columns={columns}
                    />
                </Card>
            </Container>
        </Page>
    );
};

export default ListeMedicament;
