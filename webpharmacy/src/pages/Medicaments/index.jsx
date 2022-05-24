import MUIDataTable from "mui-datatables";
import {
    Card,
    Container,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Page from "../../components/Page";
import Scrollbar from "../../components/Scrollbar";
import StackComponent from "../components/StackComponent";

export default function ListeMedicament() {
    // HOOKS
    const navigation = useNavigate();
    // Prototype de la creation d'un medicament
    const createMedicament = (
        id,
        nom,
        dose,
        laboratoire,
        statut,
        prix,
        poids
    ) => {
        return {
            id,
            nom,
            dose,
            laboratoire,
            statut,
            prix,
            poids,
        };
    };

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
    ];

    const data = [
        { id: "0", nom: "Paracetamol", dose: "100 mg", laboratoire: "LANA DEV", prix: "200 FR", poids: "12 mg", statut: true },
    ];

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
                            title={"Employee List"}
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
