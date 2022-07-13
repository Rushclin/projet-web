
import { Add, ArrowBack, CollectionsBookmarkRounded, RestoreRounded } from "@mui/icons-material";
import { Button, Card, Container, Grid, Stack, TextField, Typography, disabled,FormControl, InputLabel, Select, MenuItem} from "@mui/material";
import { Box } from "@mui/material";
import axios from "axios";
import { ca } from "date-fns/locale";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Page from "../../components/Page";
import { useAuthContext } from "../../context/userContext";

 const NouveauMedicament = () => {

    const {user} = useAuthContext()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const [medicament, setMedicament] = useState({
        name: "",
        dose: "",
        lab: "",
        status: 0,
        price: "",
        quantite:"",
        pharmacyId: user.userId
    })

    const [image, setImage] = useState({})

    const handleImage = (e) => {
        setImage(e.target.files[0])
    }
    const handleChange = (e) => {
        setMedicament({...medicament, [e.target.name]: e.target.value})
    }
    console.log(medicament)

    const handleReset = () => {
        setMedicament({
            name: "",
            dose: "",
            lab: "",
            status: 0,
            price: "",
            quantite:"",
        })
    }
   
    const handleSubmit = (event) => {
        event.preventDefault()
     
     //    On fait les verification ici
        
        const data = new FormData()
        data.append("medicament", JSON.stringify(medicament))
       console.log(data.get("medicament"))
        axios.post("https://hanniel-api.herokuapp.com/pharmacy/medicament", data, {
            userId: user.userId,  
            headers: {Authorization: `Bearer ${user.token}`}
        }).then((response) => {
            console.log("La requete a marchee")
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <Page title="Nouveau medicament">
            <Container>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb={5}
                >
                    <Typography variant="h5">Nouveau medicament</Typography>
                    <Button
                        variant="contained"
                        onClick={() => {
                            navigate("/medicament");
                        }}
                        startIcon={<ArrowBack />}
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
                    <Box >
                    <ValidatorForm onSubmit={handleSubmit}>
                        <Grid container>
                            <Grid item md={6} px={1}>
                                <TextValidator
                                    required
                                    onChange={handleChange}
                                    value={medicament.name}
                                    id="name"
                                    name="name"
                                    label="Nom du medicament"
                                    fullWidth
                                    margin="normal"
                                    validators={["required"]}
                                    errorMessage={["ce champs est obligatoire"]}
                                />
                                  <TextValidator
                                    required
                                    onChange={handleChange}
                                    id="dose"
                                    value={medicament.dose}
                                    name="dose"
                                    label="dose du medicament"
                                    fullWidth
                                    margin="normal"
                                    validators={["required"]}
                                    errorMessage={["cechamps est obligatoire"]}
                                />
                                 
                                <TextValidator
                                    required
                                    onChange={handleChange}
                                    id="lab"
                                    name="lab"
                                    value={medicament.lab}
                                    label="laboratoire du medicament"
                                    fullWidth
                                    margin="normal"
                                    validators={["required"]}
                                    errorMessage={["cechamps est obligatoire"]}
                                    
                                />
                                  </Grid>
                                  <Grid item md={6} px={1}>
                                  <FormControl fullWidth style={{ marginBottom: "15px" }}>
                                            <InputLabel name="status">Statut</InputLabel>
                                        <Select
                                            labelId="status"
                                            id="status"
                                            label="Statut"
                                            name="status"
                                            value={medicament.status}
                                            onChange={handleChange}
                                            >
                                            <MenuItem value={1}>Disponible</MenuItem>
                                            <MenuItem value={0}>Non disponible</MenuItem>
                                        </Select>
                                    </FormControl>
                             
                                  <TextValidator
                                    required
                                    onChange={handleChange}
                                    id="price"
                                    value={medicament.price}
                                    name="price"
                                    label="prix du medicament"
                                    fullWidth
                                    margin="normal"
                                    validators={["required"]}
                                    errorMessage={["cechamps est obligatoire"]}
                                />
                                   
                              <TextValidator
                                    required
                                    onChange={handleChange}
                                    id="quantite"
                                    name="quantite"
                                    value={medicament.quantite}
                                    label="quantite du medicament"
                                    fullWidth 
                                    margin="normal"
                                    validators={["required"]}
                                    errorMessage={["cechamps est obligatoire"]}
                                />
                            
                            </Grid>
                          
                            <Grid item md={12} px={1} py={2}>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    startIcon={<Add />}
                                    style={{ margin: "10px" }}
                                    onClick={ handleSubmit}
                                    disabled={loading}
                                    >

                                    Sauvegarder
                                </Button>
                                <Button type="reset" variant="contained" color="error"
                                 onClick={handleReset}>
                                    startIcon={<RestoreRounded/>}
                                    Annuler
                                </Button>
                            </Grid>
                        </Grid>
                        </ValidatorForm>
                    </Box>
                </Card>
            </Container>
        </Page>
    );
}

export default NouveauMedicament


// import { Add, RemoveCircleOutlined } from '@mui/icons-material'
// import { Button, Card, Container, Divider, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
// import React, { Component } from 'react'
// import Page from '../../components/Page'
// import Scrollbar from '../../components/Scrollbar'
// import StackComponent from '../components/StackComponent'
// import axios from 'axios'

// export default  NouveauMedicament = () =>{

//     const {user} = useAuthContext()
//     const [loading, setLoading] = useState(false)
//     const navigate = useNavigate();

//     const [medicament, setMedicament] = useState({
//         nom: "",
//         dose: "",
//         laboratoire: "",
//         statut: 0,
//         prix: "",
//         poids: "",
//     })

//     // Je dois maintenant gerer le state des champs de texte
//     handleChange = (e) => {
//         this.setState((prevState) => ({
//             newMedicament: { ...prevState.newMedicament, [e.target.name]: e.target.value }
//         }))

//     }

//     handleReset = () => {
//         this.setState(() => ({
//             newMedicament: {}
//         }))
//     }

//     handleSubmit = (event) => {
//         event.preventDefault()
     
//      //    On fait les verification ici
        
//         const data = new FormData()
//         data.append("medicament", JSON.stringify(medicament))
//         data.append("image", image)
//         axios.post("https://hanniel-api.herokuapp.com/pharmacy/createMedicament", data, {
//             /* userId: user.userId,  */
//             headers: {Authorization: `Bearer ${user.token}`}
//         }).then((response) => {
//             console.log("La requete a marchee")
//         }).catch((error) => {
//             navigate("/medicament/") 
//         }).catch((error) => {
//             console.log(error)
//         })
//         console.log("On soumet le formulaire")


//     }

//     /*  componentDidUpdate = (prevProps, prevState) => {
//          if (prevState.newMedicament != this.state.newMedicament) {
//              this.setState((prevState) => ({
//                  newMedicament: { prevState }
//              }))
//          }
//      } */
//      console.log('bonlour');
//         return (
//             <Page title="Nouveau medicament">
//                 <Container>
//                     <StackComponent label="Retour" description="Creation d'un nouveau medicament" route="/medicament" />

//                     {
//                         // Les element de la carte
//                     }

//                     <Card style={{ padding: "20px" }}>
//                         <Scrollbar>
//                             <Typography variant="subTitle2">Remplissez le formulaire pour creer un nouveau medicament</Typography>
//                             <Divider />

//                             <Grid container spacing={2} style={{ marginTop: "10px" }}>
//                                 <Grid item xs={6}>
//                                     <TextField value={newMedicament.nom} onChange={this.handleChange} name="nom" fullWidth label="Nom" style={{ marginBottom: "15px" }} />
//                                     <TextField value={newMedicament.dose} onChange={this.handleChange} name="dose" fullWidth label="Dose" style={{ marginBottom: "15px" }} />
//                                     <TextField value={newMedicament.laboratoire} onChange={this.handleChange} name="laboratoire" fullWidth label="Laboratoire" style={{ marginBottom: "15px" }} />
//                                 </Grid>
//                                 <Grid item xs={6}>
//                                     <FormControl fullWidth style={{ marginBottom: "15px" }}>
//                                         <InputLabel name="demo-1">Statut</InputLabel>
//                                         <Select
//                                             labelId="demo-1"
//                                             id="demo-1"
//                                             label="Statut"
//                                             name="statut"
//                                             value={newMedicament.statut}
//                                             onChange={this.handleChange}
//                                         >
//                                             <MenuItem value={1}>Disponible</MenuItem>
//                                             <MenuItem value={0}>Non disponible</MenuItem>
//                                         </Select>
//                                     </FormControl>
//                                     <TextField value={newMedicament.prix} onChange={this.handleChange} name="prix" fullWidth label="Prix" type="number" style={{ marginBottom: "15px" }} />
//                                     <TextField value={newMedicament.poids} onChange={this.handleChange} name="poids" fullWidth label="Poids" type="number" style={{ marginBottom: "15px" }} />
//                                 </Grid>
//                             </Grid>
//                             <Grid container spacing={2}>
//                                 <Grid item xs={12}>
//                                     <Stack direction="row" alignItems="center" justifyContent='space-evenly' mt={3}>
//                                         <Button color="error" onClick={this.handleReset} variant="contained" startIcon={<RemoveCircleOutlined />}>Annuler</Button>
//                                         <Button variant="contained" startIcon={<Add />}>Ajouter</Button>
//                                     </Stack>
//                                 </Grid>
//                             </Grid>
//                         </Scrollbar>
//                     </Card>
//                 </Container>
//             </Page>
//         )
// }

