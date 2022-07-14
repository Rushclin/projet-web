import { VaccinesOutlined } from "@mui/icons-material"
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Page from "../../components/Page"
import { useAuthContext } from "../../context/userContext"
import axios from 'axios'

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

const LoginPage = () => {

    //HOOKS 
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const AuthContext = useAuthContext()



    const handleChange = e => {
        setUser((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // const data = new FormData(e.currentTarget)
        axios.post("https://hanniel-api.herokuapp.com/pharmacy/signIn", user).then((response) => {
            if (response.status && response.status === 200) {
                window.sessionStorage.setItem("user", JSON.stringify(response.data));
                navigate("/dashboard");
                AuthContext.update();
            } else {
                // Autre condition ici 
            }
        }).catch((error) => {
            console.log(error)
        })

    }

    return (
        <Page title="Login page">
            <Grid container component="main" sx={{ height: '100vh ' }}>
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
                    <Box
                        sx={{
                            my: 8,

                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <VaccinesOutlined />
                        </Avatar>

                        <Typography component="h1" variant="h5" style={{ fontWeight: '200', textTransform: 'uppercase' }}>
                            Connexion pour pharmacien
                        </Typography>

                        <Box component="form" onSubmit={handleSubmit} px={3} style={{ width: '90%' }}>
                            <TextField
                                margin="normal"
                                required
                                type="email"
                                fullWidth
                                value={user.email}
                                onChange={handleChange}
                                id="email"
                                label="Entrez votre email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                value={user.password}
                                onChange={handleChange}
                                label="Entrez votre mot de passe"
                                name="password"
                                autoComplete="password"
                                type="password"
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
                                onClick={handleSubmit}
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

export default LoginPage