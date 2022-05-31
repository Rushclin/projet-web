import {
    Card,
    Container,
    Paper,
    Stack,
    Table,
    TableHead,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
    TableBody,
    Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Page from "../../components/Page";

const ShowPatient = () => {
    const navigate = useNavigate()
    return (
        <Page title="Afficher patient">
            <Container>
                <Stack direction="row" mb={5} alignItems="center" justifyContent='space-between'>
                    <Typography variant="h5">Afficher un patient</Typography>
                    <Button variant='contained' onClick={() => navigate("/patients")}>Retour</Button>
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
                                    <TableCell>Nom & Prenom</TableCell>
                                    <TableCell>Takam Rushclin</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Card>
            </Container>
        </Page>
    );
};

export default ShowPatient;
