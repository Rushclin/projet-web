import { VaccinesOutlined } from "@mui/icons-material";
import { Alert, Avatar } from "@mui/material";
import { Paper } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Page from "../../components/Page";
import axios from "axios";
import { useAuthContext } from "../../context/userContext";

const Copyright = (props) => {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
};

export default function LoginPage() {
    //HOOKS
    const [user, setUser] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const AuthContext = useAuthContext();

    const handleChange = (e) => {
        setUser((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("https://hanniel-api.herokuapp.com/admin/signIn", user)
            .then((response) => {
                //console.log(response.data)
                if (response.status && response.status === 200) {
                    window.sessionStorage.setItem("user", JSON.stringify(response.data));
                    navigate("/dashboard");
                    AuthContext.update();
                } else {
                    setMessage(
                        "Connexion non reussie, veuillez verifier votre login ou mot de passe"
                    );
                    setError(true);
                }
            })
            .catch((error) => {
                console.log(error);
                setMessage("Erreur de connexion, veuillez verifier vos identifiants");
                setError(true);
            });
    };

    return (
        <Page title="Login  page">
            <Grid container component="main" sx={{ height: "100vh" }}>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={6}
                    sx={{
                        backgroundImage: "url(https://source.unsplash.com/random)",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: (t) =>
                            t.palette.mode === "light"
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />

                <Grid item xs={12} sm={8} md={6} component={Paper} square>
                    <Box
                        sx={{
                            my: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                            <VaccinesOutlined />
                        </Avatar>

                        <Typography
                            variant="h5"
                            component="h1"
                            style={{ textTransform: "uppercase", margin: "1px" }}
                        >
                            Connexion administrateur
                        </Typography>
                        {error && <Alert severity="error">{message}</Alert>}
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            style={{ width: "90%" }}
                        >
                            <TextField
                                margin="normal"
                                required
                                type="email"
                                fullWidth
                                id="email"
                                label="Entrez votre email"
                                name="email"
                                autoFocus
                                value={user.email}
                                onChange={handleChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                type="password"
                                fullWidth
                                id="password"
                                label="Entrez votre mot de passe"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                            />
                            {/*  <FormControlLabel
                                control={<Checkbox value="souvenir" color="primary" />}
                                label="Se souvenir de moi"
                            /> */}
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
    );
}
