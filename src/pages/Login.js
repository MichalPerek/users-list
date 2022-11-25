import React from 'react';
import { CssBaseline,Grid} from "@mui/material";

import LoginPhoto from "../components/Login/LoginPhoto";
import LoginForm from "../components/Login/LoginForm";

const Login = () => {

    return (

        <Grid container component="main" sx={{height: '100vh'}}>
            <CssBaseline/>
            <LoginPhoto/>
            <LoginForm/>
        </Grid>

    );
}

export default Login;