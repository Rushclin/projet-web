import MUIDataTable from "mui-datatables";
import { Button, ButtonGroup, Card, Container, } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Page from "../../components/Page";
import Scrollbar from "../../components/Scrollbar";
import StackComponent from "../components/StackComponent";
import { DeleteRounded, Edit } from "@mui/icons-material";
import { useAuthContext } from "../../context/userContext";
import axios from "axios";

export default function ListeMedicament() {
    // HOOKS

    useEffect(() => {
        getMedicament()
    }, [])

    const navigate = useNavigate()
    const { user } = useAuthContext();
    const [medicaments, setMEdicaments] = useState([])

    const getMedicament = () => {
        axios.get("https://hanniel-api.herokuapp.com/pharmacy/a/medicament/" + user.userId, {
            userId: user.userId,
            headers: { Authorization: `Bearer ${user.token}` }
        }).then((response) => {
            console.log(response.data.message)
        }).catch((error) => {
            console.log(error)
        })
    }

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
            label: "Nom produit",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "dose",
            label: "Dose",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "laboratoire",
            label: "Laboratoire",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "prix",
            label: "Prix",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "poids",
            label: "Poids",
            options: {
                filter: true,
                sort: false,
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
            options: {
                empty: true,
                customBodyRenderLite: (dataIndex, id) => {
                    return (
                        <>
                            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                <Button size="small" variant='contained' onClick={() => { navigate("/medicament/update") }}>
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

    // const data = [
    //     { id: "0", nom: "Paracetamol", dose: "100 mg", laboratoire: "LANA DEV", prix: "200 FR", poids: "12 mg", statut: true },
    //     { id: "1", nom: "Mebendazole", dose: "150 mg", laboratoire: "FLUTTER DEV", prix: "500 FR", poids: "12 mg", statut: true },
    //     { id: "0", nom: "Paracetamol", dose: "100 mg", laboratoire: "LANA DEV", prix: "200 FR", poids: "12 mg", statut: true },
    //     { id: "1", nom: "Mebendazole", dose: "150 mg", laboratoire: "FLUTTER DEV", prix: "500 FR", poids: "12 mg", statut: true },
    //     { id: "0", nom: "Paracetamol", dose: "100 mg", laboratoire: "LANA DEV", prix: "200 FR", poids: "12 mg", statut: true },
    //     { id: "1", nom: "Mebendazole", dose: "150 mg", laboratoire: "FLUTTER DEV", prix: "500 FR", poids: "12 mg", statut: true },
    //     { id: "0", nom: "Paracetamol", dose: "100 mg", laboratoire: "LANA DEV", prix: "200 FR", poids: "12 mg", statut: true },
    //     { id: "1", nom: "Mebendazole", dose: "150 mg", laboratoire: "FLUTTER DEV", prix: "500 FR", poids: "12 mg", statut: true },
    // ];

    const options = {
        filterType: 'checkbox',
    };

    // FIN

    return (
        <Page title="Liste medicaments">
            <Container>
                <StackComponent
                    label="Nouveau"
                    description="Liste des medicaments"
                    icon={true}
                    route="/medicament/create"
                />

                <Card>
                    <Scrollbar>
                        <MUIDataTable
                            title={"Liste des medicaments"}
                            // data={data}
                            columns={columns}
                            options={options}
                        />
                    </Scrollbar>
                </Card>
            </Container>
        </Page>
    );
}
