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
    useEffect(()=> {
        getOneCampagne()
    }, [])
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
   const [image, setImage] = useState({})

  const getOneCampagne = (e) => { 
    axios.get("https://hanniel-api.herokuapp.com/hospital/g/campaign/"+id, {
        userId : user.userId,
        headers: {Authorization: `Bearer ${user.token}`}
    }).then((response) => {
        setCampagne(response.data.message)
    }).catch((error) => {
        console.log(error)
    })
  }

 
     const updateCampagne = () =>{
        const data =new FormData()

        data.append("campagne",JSON.stringify(campagne))
        data.append("image",image)

        axios.put(`https://hanniel-api.herokuapp.com/hospital/u/campaign/${id}`, data, {
            userId: user.userId,  
            headers: {Authorization: `Bearer ${user.token}`}
        }).then((response) => {
            console.log("La campagne  à ete modifier")
        }).catch((error) => {
            console.log(error)
        })
      
    }
    const handleImage = (e) => {
        setImage(e.target.files[0])
    }
    const handleChange = (e) =>{
        setCampagne({ ...campagne, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateCampagne()
    }

    console.log(campagne)
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
                                    onChange={handleChange}
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
                                    onChange={handleChange}
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
                                    value={campagne.responsable}
                                    onChange={handleChange}
                                    
                                />
                                <TextField
                                    required
                                    id="image"
                                    name="image"
                                    fullWidth
                                    type="file"
                                    margin="normal"
                                   /*  onChange={handleImage}
                                    value={image} */
                                />
                                 <TextField
                                    required
                                    id="dateBegin"
                                    name="dateBegin"
                                    value={campagne.dateBegin}
                                    label="Date de debut de la campagne"
                                    fullWidth
                                    margin="normal"
                                    onChange={handleChange}
                                    type="date"
                                />
                                  <TextField
                                    required
                                    id="dateEnd"
                                    value={campagne.dateEnd}
                                    onChange={handleChange}
                                    name="dateEnd"
                                    label="Date de la fin de la campagne"
                                    fullWidth
                                    margin="normal"
                                    type="date"
                                />
                            </Grid>
                            <Grid item md={12} px={1} py={2}>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    style={{ margin: "10px" }}
                                    onClick={handleSubmit}
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
