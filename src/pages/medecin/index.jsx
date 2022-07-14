import MUIDataTable from "mui-datatables";
import {
    Button,
    ButtonGroup,
    Card,
    Container,
    Stack,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Page from "../../components/Page";
import Scrollbar from "../../components/Scrollbar";
//import StackComponent from "../components/StackComponent";
import { DeleteRounded, Edit, PlusOne } from "@mui/icons-material";
import { useAuthContext } from "../../context/userContext";
import axios from "axios";
import { useConfirm } from "material-ui-confirm";
import CreerMedecin from "./create";

export default function ListeMedecin() {
    // HOOKS
    const [medecin, setMedecin] = useState([])
   


    useEffect(()=> {
      getMedecin()
    }, [])
    const navigate = useNavigate()
    
    const {user} = useAuthContext()
    const confirm = useConfirm()
    const [error,setError] = useState(false)
    const [data,setData] = useState(false)
  


    const handleDelete = (id) => {
      
        confirm({description: "Etes-vous sur de bien vouloir supprimer?"
    
    })
        .then((resp) => {
            axios.delete("https://hanniel-api.herokuapp.com/hospital/d/medecin/"+id, {
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
        // Recuperation des medecins                                                                                                                                                                                                                                                                                                                                                                 
        const getMedecin = () => {
            axios.get("https://hanniel-api.herokuapp.com/hospital/a/medecin/"+ user.userId, {
                userId: user.userId, 
                headers: {Authorization: `Bearer ${user.token}`}
            }).then((response) => {
                setMedecin(response.data.message)
                //console.log(response.data.message)
            }).catch((error) => {
                console.log(error)
            })
        }
    
    
        console.log(medecin);
    // En utilisant le MUIDatatable
    // DEBUT
    const columns = [
 
        {
            name: "name",
            label: "Nom medecin",
            options:{
                filter: true,
                sort: true,
            }
        },

    
        {
            name: "description",
            label: "Description",
            options: {
                filter: true,
                sort: false,
            }
        },
        
        {
            name: "specialite",
            label: "Specialite",
            options:{
                filter: true,
                sort: true,
            }
        },
       
        {
            name: "statut",
            label: "Statut",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "actions",
            label: "Actions",
            options:{
                empty: true,
                customBodyRenderLite: (dataIndex, id) => {
                    return (
                        <>
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                          //  <Button size="small" variant='contained'>
                                <Edit />
                            </Button>
                            <Button size="small" variant='contained' color="error" onClick={() => handleDelete(medecin[dataIndex].id)}>
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

   
  
    return (
        <Page title="Liste Des Medecin">
            <Container>
               {/*  <StackComponent
                    label="Nouveau"
                    description="Liste des campagnes"
                    icon={true}
                    route="/campagnes/create"
                /> */}
                <Stack alignItems="center" justifyContent="space-between" direction="row" mb={3}>
                    <Typography>Liste des medecins</Typography>
                    <Button  variant="contained" startIcon={<PlusOne/>} onClick={()=> navigate("/medecin/create")}>Nouveau Medecin</Button>
                </Stack>

                <Card>
                    <Scrollbar>
                        <MUIDataTable
                            title={"Liste des medecins"}
                            data={medecin}
                            columns={columns}
                            options={options}
                        />
                    </Scrollbar>
                </Card>
            </Container>
        </Page>
    );
       
}