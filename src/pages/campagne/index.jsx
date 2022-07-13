import MUIDataTable from "mui-datatables";
import {
    Button,
    ButtonGroup,
    Card,
    Container,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Page from "../../components/Page";
import Scrollbar from "../../components/Scrollbar";
//import StackComponent from "../components/StackComponent";
import { DeleteRounded, Edit, PlusOne } from "@mui/icons-material";
import { useState } from "react";
import { useAuthContext } from "../../context/userContext";
import axios from "axios";
import { useEffect } from "react";
import { useConfirm } from "material-ui-confirm";

export default function ListeMedicament() {
    // HOOKS
    useEffect(()=> {
        getCampage()
    }, [])
    const navigate = useNavigate()
    const [campagnes, setCampagnes] = useState([])
    const {user} = useAuthContext()
    const confirm = useConfirm()
    const [error,setError] = useState(false)
  

    const handleDelete = (id) => {
      
        confirm({description: "Etes-vous sur de bien vouloir supprimer?"
    
    })
        .then((resp) => {
            axios.delete("https://hanniel-api.herokuapp.com/hospital/d/campaign/"+id, {
             
                headers: {Authorization: `Bearer ${user.token}`}
            }).then((response) => {
                console.log("Bien supprimé")
            }).catch((error) => {
                console.log(error)
            })
        }).catch((error) => {
            console.log("On a refuse")
        })
    }

    // Recuperation des campagnes                                                                                                                                                                                                                                                                                                                                                                   
    const getCampage = () => {
        axios.get("https://hanniel-api.herokuapp.com/hospital/a/campaign/"+ user.userId, {
            userId: user.userId, 
            headers: {Authorization: `Bearer ${user.token}`}
        }).then((response) => {
            setCampagnes(response.data.message)
            //console.log(response.data.message)
        }).catch((error) => {
            console.log(error)
        })
    }

    // En utilisant le MUIDatatable
    // DEBUT
    const columns = [
        {
            name: "name",
            label: "Nom de la Campagne",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "dateBegin",
            label: "Date de debut",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "dateEnd",
            label: "Date de fin",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "actions",
            label: "Actions",
            options: {
                empty: true,
                customBodyRenderLite: (dataIndex, id) => {
                    return (
                        <>
                            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                <Button size="small" variant='contained' onClick={() => { navigate("/campagne/update", {state:{id:campagnes[dataIndex].id}}) }}>
                                    <Edit />
                                </Button>
                                <Button size="small" variant="contained" color="secondary">
                                    Voir
                                </Button>
                                <Button size="small" variant='contained' color="error" onClick={()=>handleDelete(campagnes[dataIndex].id)}>
                                    <DeleteRounded />
                                </Button>
                            </ButtonGroup>
                        </>
                    );
                }
            }
        }
    ];

    const options = {
        filterType: 'checkbox',
    };

    // FIN

    return (
        <Page title="Liste campagnes">
            <Container>
               {/*  <StackComponent
                    label="Nouveau"
                    description="Liste des campagnes"
                    icon={true}
                    route="/campagnes/create"
                /> */}
                <Stack alignItems="center" justifyContent="space-between" direction="row" mb={3}>
                    <Typography>Liste des campagnes</Typography>
                    <Button  variant="contained" startIcon={<PlusOne/>} onClick={()=> navigate("/campagne/create")}>Nouvelle campagne</Button>
                </Stack>

                <Card>
                    <Scrollbar>
                        <MUIDataTable
                            title={"Liste des campagnes"}
                            data={campagnes}
                            columns={columns}
                            options={options}
                        />
                    </Scrollbar>
                </Card>
            </Container>
        </Page>
    );
}
