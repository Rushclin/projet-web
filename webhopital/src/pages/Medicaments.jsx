import { BlockRounded, CheckCircleRounded } from "@mui/icons-material";
import { Button, Card, Checkbox, Container, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Stack, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Iconify from "../components/Iconify";
import Page from '../components/Page';
import Scrollbar from "../components/Scrollbar";


// Fonction de creation d'un medicament
function createMedicament(id, nom, compagnie, verifie, statut) {
    return {
        id, nom, compagnie, verifie, statut
    }
}


// Liste des medicaments en stock par exemple 
const lignes = [
    createMedicament(0, 'Paracetamol', 'EYE Trend ACHA', true, false),
    createMedicament(1, 'Efferalgan', 'Bordeaux Medoc', false, true),
]

const Medicaments = (props) => {

    const ref = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    // Navigation 
    const navigate = useNavigate()

    return (
        <Page title="Medicaments">
            <Container>
                <Stack direction='row' alignItems='center' justifyContent='space-between' mb={5}>
                    <Typography variant='h5'>Medicaments</Typography>
                    <Button variant='contained' onClick={() => navigate('/medicaments/create')} startIcon={<Iconify icon="eva:plus-fill" />}>Nouveau</Button>
                </Stack>

                <Card>
                    <Scrollbar>
                        <TableContainer sx={{ minWidth: 800 }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            <Checkbox />
                                        </TableCell>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Noms</TableCell>
                                        <TableCell>Compagnie</TableCell>
                                        <TableCell>Verifie</TableCell>
                                        <TableCell>Statut</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        lignes.map((ligne) => (
                                            <TableRow>
                                                <TableCell><Checkbox /></TableCell>
                                                <TableCell>{ligne.id}</TableCell>{ }
                                                <TableCell>{ligne.nom}</TableCell>
                                                <TableCell>{ligne.compagnie}</TableCell>
                                                <TableCell>{(ligne.verifie ? <CheckCircleRounded color='primary' /> : <BlockRounded color="error" />)}</TableCell>
                                                <TableCell>{(ligne.statut ? <Switch defaultChecked /> : <Switch />)}</TableCell>
                                                <TableCell>
                                                    <IconButton ref={ref} onClick={() => setIsOpen(true)}>
                                                        <Iconify icon="eva:more-vertical-fill" width={20} height={20} />
                                                    </IconButton>

                                                    <Menu
                                                        open={isOpen}
                                                        anchorEl={ref.current}
                                                        onClose={() => setIsOpen(false)}
                                                        PaperProps={{
                                                            sx: { width: 200, maxWidth: '100%' },
                                                        }}
                                                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                                                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                                    >
                                                        <MenuItem sx={{ color: 'text.secondary' }}>
                                                            <ListItemIcon>
                                                                <Iconify icon="eva:trash-2-outline" width={24} height={24} />
                                                            </ListItemIcon>
                                                            <ListItemText primary="Supprimer" primaryTypographyProps={{ variant: 'body2' }} />
                                                        </MenuItem>

                                                        <MenuItem to="#" sx={{ color: 'text.secondary' }}>
                                                            <ListItemIcon>
                                                                <Iconify icon="eva:edit-fill" width={24} height={24} />
                                                            </ListItemIcon>
                                                            <ListItemText primary="Modifier" primaryTypographyProps={{ variant: 'body2' }} />
                                                        </MenuItem>
                                                    </Menu>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Scrollbar>
                </Card>
            </Container>
        </Page >
    )
}

export default Medicaments