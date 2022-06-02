import { Button, Container, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import Page from "../../components/Page"

const ShowMedicament = () => {

    const navigate = useNavigate()

    return (
        <Page title="Afficher medicament">
            <Container>
                <Stack direction="row" mb={5} alignItems="center" justifyContent='space-between'>
                    <Typography variant='h5'>
                        Afficher un medicament
                    </Typography>
                    <Button variant='contained' onClick={() => navigate("/medicaments")}>Retour</Button>
                </Stack>
            </Container>
        </Page>
    )
}

export default ShowMedicament