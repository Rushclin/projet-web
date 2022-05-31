import { Button, ButtonGroup, Card, Container, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import Page from "../../components/Page"
import VisibilityIcon from "@mui/icons-material/Visibility";
import MUIDataTable from "mui-datatables";

const ListeCampagne = () => {
    const navigate = useNavigate()

    const columns = [
        {
            name: "id",
            label: "ID",
            option: {
                filter: true,
                sort: true,
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
            name: "date_deb",
            label: "Date debut",
            option: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "date_fin",
            label: "Date de fin",
            option: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "hopital",
            label: "Hopital",
            option: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "responsable",
            label: "Responsables",
            option: {
                filter: true,
                sort: true,
            }
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
                                    onClick={() => navigate("/campagnes/show")}
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
            nom: "Vaccination pour tous",
            date_deb: "01/ 02/ 2022",
            date_fin: "01/ 03/ 2022",
            hopital: "Hopital de Distric",
            responsable: "Dr Amadine"
        }
    ]
    return (
        <Page title="Liste campagne">
            <Container>
                <Stack direction="row" mb={5}>
                    <Typography variant="h5">
                        Liste de toutes les campagnes
                    </Typography>
                </Stack>

                <Card>
                    <MUIDataTable
                        title={"Liste des campagnes"}
                        data={data}
                        columns={columns}
                        options={options}
                    />
                </Card>
            </Container>
        </Page>
    )
}

export default ListeCampagne