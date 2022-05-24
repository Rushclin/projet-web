import { ArrowBack } from '@mui/icons-material'
import { Link, Navigate, withRouter } from 'react-router-dom';
import { Button, Container, Stack, Typography } from '@mui/material'
import React, { Component } from 'react'
import Page from '../components/Page'

class NouveauMedicament extends Component {

    constructor(props) {
        super(props)
    }

    test = (nom, prenom) => {
        return ("Je m'appelle nom : " + nom + " avec un prenom " + prenom)
    }

    render() {
        const { navigation } = this.props;
        console.log(navigation)
        console.log(this.test("Takam", "Rushclin"))
        return (
            <Page title="Nouveau medicament">
                <Container>
                    <Stack direction="row" alignItems="center" justifyContent='space-between' mb={5}>
                        <Typography variant='h5'>
                            Nouveau medicament
                        </Typography>
                        <Button variant='contained' onClick={() => { <Navigate to="/medicaments/" /> }} startIcon={<ArrowBack />}>
                            Retour
                        </Button>
                    </Stack>
                </Container>
            </Page>
        )
    }

}


export default NouveauMedicament
