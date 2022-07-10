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

export default function ListeMedicament() {
    // HOOKS
    const navigate = useNavigate()

    // En utilisant le MUIDatatable
    // DEBUT
    const columns = [
        {
            name: "id",
            label: "ID",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "nom",
            label: "Nom",
            options:{
                filter: true,
                sort: true,
            }
        },

        {
            name: "prenom",
            label: "Prenom",
            options:{
                filter: true,
                sort: true,
            }
        },
        
      
            
        
        {
            name: "grade",
            label: "Grage",
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
                            <Button size="small" variant='contained' onClick={() => { navigate("/medecin/update") }}>
                                <Edit />
                            </Button>
                            <Button size="small" variant='contained' color="error" onClick={() => window.alert(`"Supprimer" ${dataIndex}`)}>
                                <DeleteRounded />
                            </Button>
                        </ButtonGroup>
                    </>
                );
             }
            }
        }
    ];
    const data = [
        { id: "0", nom: "Sonfack",     prenom: "Louis",    grade: "infirmier chef", statut: true },
        { id: "1", nom: "TONFACK",     prenom: "Loenard",   grade: "docteur",        statut: true },
        { id: "0", nom: "AZANGUEZET",  prenom: "Leo",       grade: "specialiste",    statut: true },
        { id: "1", nom: "TCHOMBA",     prenom: "Juspin",   grade: "stagier",        statut: true },
        { id: "0", nom: "MAPEMO",      prenom: "Vanessa",    grade: "infirmier ",     statut: true },
        { id: "1", nom: "KOALY",       prenom: "Jessica",    grade: "infirmier ",     statut: true },
        { id: "0", nom: "MaGA",        prenom: "Ines",       grade: "stagiaire",      statut: true },
        { id: "0", nom: "DONGMO",     prenom: "Laura",       grade: "infirmier chef", statut: true },
       
    ]
    const options = {
        filterType: 'checkbox',
    };
    //fin
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
                            data={data}
                            columns={columns}
                            options={options}
                        />
                    </Scrollbar>
                </Card>
            </Container>
        </Page>
    );
       
}