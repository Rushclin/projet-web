import { Button, ButtonGroup, Card, Container, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import Page from "../../components/Page"
import VisibilityIcon from "@mui/icons-material/Visibility";
import MUIDataTable from "mui-datatables";


const ListeMedicament = () => {

    const navigate = useNavigate()

    const columns = [
        {
            name: "id",
            label: "ID",
            option: {
                filter: true,
                sort: true
            }
        },
        {
            name: "nom",
            label: "Nom",
            option: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "dose",
            label: "Dose",
            option: {
                filter: true,
                sort: true
            }
        },
        {
            name: "laboratoire",
            label: "Laboratoire",
            option: {
                filter: true,
                sort: true
            }
        },
        {
            name: "prix",
            label: "Prix",
            option: {
                filter: true,
                sort: true
            }
        },
        {
            name: "poids",
            label: "Poids",
            option: {
                filter: true,
                sort: true
            }
        },
        {
            name: "actions",
            label: "Actions ",
            options: {
                customBodyRenderLite: (index, id) => {
                    return (
                        <>
                            <ButtonGroup variants="contained">
                                <Button variant="contained" size="small"
                                    onClick={() => navigate("/medicaments/show")}
                                >
                                    <VisibilityIcon />
                                </Button>
                            </ButtonGroup>
                        </>
                    )
                }
            }
        }
    ]

    const options = {
        filterType: "checkbox"
    }

    const data = [
        {
            id: "0",
            nom: "Paracetamol",
            dose: "1000",
            laboratoire: "Lana derms",
            prix: "345678",
            poids: "100"
        }
    ]

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
                        data={data}
                        title={"Liste des medicaments"}
                        options={options}
                        columns={columns}
                    />

                </Card>
            </Container>
        </Page>
    )
}

export default ListeMedicament