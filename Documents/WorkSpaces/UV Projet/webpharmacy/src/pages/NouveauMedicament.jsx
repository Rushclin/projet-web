import { ArrowBack, Check, ErrorOutline, TextFields } from '@mui/icons-material'
import { Button, Card, Container, Grid, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Page from '../components/Page'
import Scrollbar from '../components/Scrollbar'

const NouveauMedicament = (props) => {

    const navigate = useNavigate()
    const errorMessage = "Veuillez remplir le champ ";

    const [nom, setNom] = useState('')
    const [comp, setCompagnie] = useState('')

    const onChangeNom = (e) => {
        setNom(e.target.value)
    }

    const onChangeCompagnie = (e) => {
        setCompagnie(e.target.value)
    }

    const handleSubmit = () => {
        if (!nom.trim()) {
            errorMessage = "nom "
        }
        if (!comp.trim()) {
            errorMessage.concat("compagnie ")
        }

        alert(errorMessage)
    }

    return (
        <Page title="Nouveau medicament">
            <Container>
                <Stack direction='row' alignItems="center" justifyContent='space-between' mb={5}>
                    <Typography variant='h5'>Nouveau Medicament</Typography>
                    <Button variant='contained' onClick={() => navigate('/medicaments')} startIcon={<ArrowBack />}>Retour</Button>
                </Stack>

                <Card>
                    <Scrollbar>
                        <Stack m={2}>
                            <Typography mb={2} variant='subtilte'>Remplissez le formulaire pour ajuter un nouveau medicament</Typography>
                            <hr />
                            <Grid container mt={2}>
                                <Grid item xs={6} pr={2}>
                                    <TextField value={nom} onChange={(e) => onChangeNom(e)} id='nom_produit' label='Nom du produit' variant='outlined' fullWidth />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField value={comp} onChange={(e) => onChangeCompagnie(e)} id='nom_compagnie' label='Compagnie    ' variant='outlined' fullWidth />
                                </Grid>

                                <Stack mt={2} direction='row' alignItems="center" mb={5}>
                                    <Button variant='contained' onClick={() => handleSubmit()} startIcon={<Check />} mx={2} >Sauvegarder</Button>
                                    <Button variant='contained' color='error' startIcon={<ErrorOutline />}>Annuler</Button>
                                </Stack>
                            </Grid>
                        </Stack>
                    </Scrollbar>
                </Card>
            </Container>
        </Page>
    )
}

export default NouveauMedicament
