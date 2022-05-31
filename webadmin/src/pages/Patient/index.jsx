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

const ListePatient = () => {
    // HOOKS
    const navigate = useNavigate();

    // MUIDataTable
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
            name: "prenom",
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
            name: "telephone",
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
                                    onClick={() => navigate("/patients/show")}
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
            nom: "Takam ",
            prenom: "Rushclin",
            sexe: "Masculin",
            telephone: "690139627",
            email: "takamrushclin@gmail.com",
        },
    ];
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
                        data={data}
                        columns={columns}
                        options={options}
                    />
                </Card>
            </Container>
        </Page>
    );
};

export default ListePatient;
