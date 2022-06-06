import { Button, ButtonGroup, Card, Container, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import Page from "../../components/Page"
import VisibilityIcon from "@mui/icons-material/Visibility";
import MUIDataTable from "mui-datatables";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/userContext";

const ListeCampagne = () => {
    const navigate = useNavigate()
    const { user } = useAuthContext();

    useEffect(() => {
        getAllCampagne()
        //getOneHopital()
    }, [])


    const [campagnes, setCampagne] = useState([])

    // Recuperer toutes les campagnes
    const getAllCampagne = () => {
        let campagnes = [];
        axios.get("https://hanniel-api.herokuapp.com/admin/all/campaign", {
            userId: user.userId,
            headers: { Authorization: `Bearer ${user.token}` }
        }).then((response) => {
            console.log(response.data)
            campagnes = [...response.data.message]
            setCampagne([...campagnes])
        }).catch((error) => {
            console.log(error)
        })
    }

    const columns = [
        /*  { name: "id", label: "ID", option: { filter: true, sort: true, } }, */
        { name: "name", label: "Nom", option: { filter: true, sort: true, } },
        { name: "dateBegin", label: "Date debut", option: { filter: true, sort: true, } },
        { name: "dateEnd", label: "Date de fin", option: { filter: true, sort: true, } },
        /* { name: "hospitalId", label: "Hopital", option: { filter: true, sort: true, } }, */
        { name: "responsable", label: "Responsables", option: { filter: true, sort: true, } },
        {
            name: "actions",
            label: "Actions",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) => {
                    return (
                        <>
                            <ButtonGroup variants="contained">
                                <Button
                                    variant="contained"
                                    size="small"
                                    onClick={(e) => {
                                        navigate("/campagnes/show/", { state: { id: campagnes[dataIndex].id } })
                                    }}
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
                        data={campagnes}
                        columns={columns}
                        options={options}
                    />
                </Card>
            </Container>
        </Page>
    )
}

export default ListeCampagne