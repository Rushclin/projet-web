import { VaccinesOutlined } from "@mui/icons-material"
import { Avatar } from '@mui/material'
import { Paper } from '@mui/material'
import { TextField } from "@mui/material"
import { Checkbox } from "@mui/material"
import { Button } from "@mui/material"
import { FormControlLabel } from "@mui/material"
import { Typography } from "@mui/material"
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import Page from '../../components/Page'


const Copyright = (props) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" to="#">
                Notre site web
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function LoginPage() {

    //HOOKS 
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/dashboard")
        const data = new FormData(e.currentTarget)
        console.log({
            email: data.get('email')
        })
    }

    return (
        <Page title="Login  page">
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={6}
                    sx={{
                        backgroundImage: "url(https://source.unsplash.com/random)",
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />

                <Grid item xs={12} sm={8} md={6} component={Paper} square>
                    <Box sx={{
                        my: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <VaccinesOutlined />
                        </Avatar>

                        <Typography variant='h5' component='h1' style={{ textTransform: 'uppercase' }}>
                            Connexion pour administrateur
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} style={{ width: '90%' }}>
                            <TextField
                                margin="normal"
                                required
                                type="email"
                                fullWidth
                                id="email"
                                label="Entrez votre email"
                                name="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                type="password"
                                fullWidth
                                id="password"
                                label="Entrez votre mot de passe"
                                name="password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="souvenir" color="primary" />}
                                label="Se souvenir de moi"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                SE CONNECTER
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link to="" variant="body2">
                                        Mot de passe oublie?
                                    </Link>
                                </Grid>
                            </Grid>

                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Page>
    )
}
