import { VaccinesOutlined } from "@mui/icons-material";
import {
    Alert,
    AlertTitle,
    Avatar,
    Card,
    Checkbox,
    CircularProgress,
    FormControlLabel,
} from "@mui/material";
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
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import styled from "@emotion/styled";

const Copyright = (props) => {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © TEEMES "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
};
// Ici

const FlexBox = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
}));

const JustifyBox = styled(FlexBox)(() => ({
    justifyContent: "center",
}));

const ContentBox = styled(Box)(() => ({
    height: "100%",
    padding: "32px",
    position: "relative",
    background: "rgba(0, 0, 0, 0.01)",
}));

const Root = styled(JustifyBox)(() => ({
    background: "#c7c7c7",
    minHeight: "100% !important",
    "& .card": {
        maxWidth: 900,
        borderRadius: 12,
        margin: "1rem",
    },
}));

const LoginPage = () => {
    const [user, setUser] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const AuthContext = useAuthContext();

    const handleChange = (e) => {
        setUser((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setOpen(true);
        setError(false);
        axios
            .post("https://hanniel-api.herokuapp.com/admin/signIn", user)
            .then((response) => {
                if (response.status && response.status === 200) {
                    window.sessionStorage.setItem("user", JSON.stringify(response.data));
                    navigate("/dashboard");
                    AuthContext.update();
                } else {
                    setMessage("Connexion non reussie ");
                    setError(true);
                }
            })
            .catch((error) => {
                console.log(error);
                setMessage("Erreur de connexion");
                setError(true);
                setOpen(false);
            });
    };

    return (
        <Root>
            <Page title="Login">
                <Card className="card">
                    <Grid container>
                        <Grid item md={12}>
                            <ContentBox>
                                <ValidatorForm onSubmit={handleSubmit}>
                                    {message && (
                                        <Alert severity="error" style={{ marginBottom: "10px" }}>
                                            {message}
                                        </Alert>
                                    )}
                                    <Typography
                                        variant="h5"
                                        component="p"
                                        mb={4}
                                        style={{ textAlign: "center" }}
                                    >
                                        Connexion admin
                                    </Typography>
                                    <TextValidator
                                        sx={{ mb: 3, width: "100%" }}
                                        variant="outlined"
                                        size="small"
                                        label="Email"
                                        fullWidth
                                        onChange={handleChange}
                                        type="email"
                                        name="email"
                                        value={user.email}
                                        validators={["required", "isEmail"]}
                                        errorMessages={[
                                            "Ce champ est obligatoire",
                                            "Email non valide",
                                        ]}
                                    />
                                    <TextValidator
                                        sx={{ mb: "12px", width: "100%" }}
                                        label="Mot de passe"
                                        variant="outlined"
                                        size="small"
                                        onChange={handleChange}
                                        name="password"
                                        type="password"
                                        value={user.password}
                                        validators={["required"]}
                                        errorMessages={["Ce champ est obligatoire"]}
                                    />
                                    <FlexBox mb={2} flexWrap="wrap">
                                        <Box position="relative">
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit"
                                                disabled={open}
                                            >
                                                {open && <CircularProgress size="10" />}
                                                Se connecter
                                            </Button>
                                        </Box>
                                    </FlexBox>
                                </ValidatorForm>
                                <Copyright />
                            </ContentBox>
                        </Grid>
                    </Grid>
                </Card>
            </Page>
        </Root>
    );
};

export default LoginPage;
