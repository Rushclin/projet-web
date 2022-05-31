import { Button, Card, Container, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import Page from "../../components/Page"

const ShowCampagne = () => {
    const navigate = useNavigate()
    return (
        <Page title="Afficher une campagne">
            <Container>
                <Stack direction="row" mb={5} alignItems="center" justifyContent='space-between'>
                    <Typography variant="h5">Afficher une campagne</Typography>
                    <Button variant='contained' onClick={() => navigate("/campagnes")}>Retour</Button>
                </Stack>

                <Card>
                    <TableContainer components={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Proprietes</TableCell>
                                    <TableCell>Valeur</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>00221213</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Card>
            </Container>
        </Page>
    )
}

export default ShowCampagne