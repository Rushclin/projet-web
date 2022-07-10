import {
    Button,
    Card,
    Container,
    Grid,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Page from "../../components/Page";
import { useAuthContext } from "../../context/userContext";

export default function UpdateCampagne() {
    const [data, setData] = useState({});
    const location = useLocation();
    const { user } =useAuthContext()
    const navigate = useNavigate();
    const id = location.state.id
    const [campagne, setCampagne] = useState({
        dateBegin: '', 
        dateEnd: '',
        description: '', 
        hospitalId: user.userId, 
        hour: '', 
        name : '', 
        responsable: '', 
    })
  useEffect(()=>{
    putCampagne();
},[])
     const putCampagne = () =>{
        axios.put("https://hanniel-api.herokuapp.com/hospital/u/campaign/:idCampaign", data, {
            /* userId: user.userId,  */
            headers: {Authorization: `Bearer ${user.token}`}
        }).then((response) => {
            setCampagne(response.data.message)
        }).catch((error) => {
            console.log(error)
        })
      
    }
    const handleChange = (e) =>{
        setCampagne({ ...campagne, [e.target.name]: e.target.value})
    }
    console.log(campagne)
    return (
        <Page title="Mise a jour hoptital">
            <Container>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={5}
                >
                    <Typography variant="h5">Mise a jour des campagnes</Typography>
                    <Button
                        variant="contained"
                        onClick={() => {
                            navigate("/campagne");
                        }}
                    >
                        Retour
                    </Button>
                </Stack>

                <Card>
                    <Box mx={2} my={2}>
                        <Typography>
                            {
                                // On doit afficher l'erreur ici
                            }
                        </Typography>
                    </Box>

                    <Box component="form">
                        <Grid container>
                            <Grid item md={6} px={1}>
                                <TextField
                                    required
                                    id="name"
                                    value={campagne.name}
                                    name="name"
                                    label="Nom de la campagne"
                                    fullWidth
                                    margin="normal"
                                />
                                
                                <TextField
                                    id="description"
                                    value={campagne.description}
                                    name="description"
                                    label="Description de la campagne"
                                    fullWidth
                                    rows={2}
                                    multiline
                                    margin="normal"
                                />
                                 
                                <TextField
                                    required
                                    id="dateBegin"
                                    name="dateBegin"
                                    value={campagne.dateBegin}
                                    label="Date de debut de la campagne"
                                    fullWidth
                                    margin="normal"
                                />
                                
                            </Grid>
                            <Grid item md={6} px={1}>
                            <TextField
                                    required
                                    id="responsable"
                                    name="responsable"
                                    label="responsable de la campagne"
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    id="image"
                                    value={campagne.image}
                                    name="image"
                                    fullWidth
                                    type="file"
                                    margin="normal"
                                />
                                  <TextField
                                    required
                                    id="dateEnd"
                                    value={campagne.dateEnd}
                                    name="dateEnd"
                                    label="Date de la fin de la campagne"
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item md={12} px={1} py={2}>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    style={{ margin: "10px" }}
                                >
                                    Modifier
                                </Button>
                                <Button type="reset" variant="contained" color="error">
                                    Annuler
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Card>
            </Container>
        </Page>
    );
}
