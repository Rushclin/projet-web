import {
    Button,
    ButtonGroup,
    Card,
    Container,
    Stack,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Page from "../../components/Page";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import { useAuthContext } from "../../context/userContext";
import { useEffect, useState } from "react";

const ListePatient = () => {
    // HOOKS

    useEffect(() => {
        getPatient();
    }, []);

    const navigate = useNavigate();
    const { user } = useAuthContext();
    const [patients, setPatient] = useState([]);

    const getPatient = () => {
        axios
            .get("https://hanniel-api.herokuapp.com/admin/all/patient", {
                userId: user.userId,
                headers: { Authorization: `Bearer ${user.token}` },
            })
            .then((response) => {
                setPatient([...response.data.message]);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // MUIDataTable
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
            name: "surname",
            label: "Prenom",
            option: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "sexe",
            label: "Sexe",
            option: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "phone",
            label: "Telephone",
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
                customBodyRenderLite: (index, id) => {
                    return (
                        <>
                            <ButtonGroup variants="contained">
                                <Button
                                    variant="contained"
                                    size="small"
                                    onClick={() =>
                                        navigate("/patients/show", {
                                            state: { id: patients[index].id },
                                        })
                                    }
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

    return (
        <Page title="Liste des patient">
            <Container>
                <Stack direction="row" mb={5}>
                    <Typography variant="h5">
                        Liste des patients de l'application
                    </Typography>
                </Stack>

                <Card>
                    <MUIDataTable
                        title={"Liste des patients"}
                        data={patients}
                        columns={columns}
                        options={options}
                    />
                </Card>
            </Container>
        </Page>
    );
};

export default ListePatient;
