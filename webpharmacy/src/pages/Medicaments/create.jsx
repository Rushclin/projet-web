import { Add, RemoveCircleOutlined } from '@mui/icons-material'
import { Button, Card, Container, Divider, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import React, { Component } from 'react'
import Page from '../../components/Page'
import Scrollbar from '../../components/Scrollbar'
import StackComponent from '../components/StackComponent'

export default class NouveauMedicament extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        newMedicament: {
            nom: "",
            dose: "",
            laboratoire: "",
            statut: 0,
            prix: "",
            poids: "",
        }
    }

    // Je dois maintenant gerer le state des champs de texte
    handleChange = (e) => {
        this.setState((prevState) => ({
            newMedicament: { ...prevState.newMedicament, [e.target.name]: e.target.value }
        }))

    }

    handleReset = () => {
        this.setState(() => ({
            newMedicament: {}
        }))
    }

    /*  componentDidUpdate = (prevProps, prevState) => {
         if (prevState.newMedicament != this.state.newMedicament) {
             this.setState((prevState) => ({
                 newMedicament: { prevState }
             }))
         }
     } */

    render() {

        const newMedicament = this.state
        console.log(newMedicament)

        return (
            <Page title="Nouveau medicament">
                <Container>
                    <StackComponent label="Retour" description="Creation d'un nouveau medicament" route="/medicament" />

                    {
                        // Les element de la carte
                    }

                    <Card style={{ padding: "20px" }}>
                        <Scrollbar>
                            <Typography variant="subTitle2">Remplissez le formulaire pour creer un nouveau medicament</Typography>
                            <Divider />

                            <Grid container spacing={2} style={{ marginTop: "10px" }}>
                                <Grid item xs={6}>
                                    <TextField value={newMedicament.nom} onChange={this.handleChange} name="nom" fullWidth label="Nom" style={{ marginBottom: "15px" }} />
                                    <TextField value={newMedicament.dose} onChange={this.handleChange} name="dose" fullWidth label="Dose" style={{ marginBottom: "15px" }} />
                                    <TextField value={newMedicament.laboratoire} onChange={this.handleChange} name="laboratoire" fullWidth label="Laboratoire" style={{ marginBottom: "15px" }} />
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl fullWidth style={{ marginBottom: "15px" }}>
                                        <InputLabel name="demo-1">Statut</InputLabel>
                                        <Select
                                            labelId="demo-1"
                                            id="demo-1"
                                            label="Statut"
                                            name="statut"
                                            value={newMedicament.statut}
                                            onChange={this.handleChange}
                                        >
                                            <MenuItem value={1}>Disponible</MenuItem>
                                            <MenuItem value={0}>Non disponible</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <TextField value={newMedicament.prix} onChange={this.handleChange} name="prix" fullWidth label="Prix" type="number" style={{ marginBottom: "15px" }} />
                                    <TextField value={newMedicament.poids} onChange={this.handleChange} name="poids" fullWidth label="Poids" type="number" style={{ marginBottom: "15px" }} />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Stack direction="row" alignItems="center" justifyContent='space-evenly' mt={3}>
                                        <Button color="error" onClick={this.handleReset} variant="contained" startIcon={<RemoveCircleOutlined />}>Annuler</Button>
                                        <Button variant="contained" startIcon={<Add />}>Ajouter</Button>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Scrollbar>
                    </Card>
                </Container>
            </Page>
        )
    }
}
