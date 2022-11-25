import React, {useEffect} from 'react';
import {Avatar, Checkbox, FormControlLabel, Grid, Link, Paper, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {logIn} from "../../feature/auth/authSlice";
import {Navigate} from 'react-router-dom'
import {useFormik} from 'formik'

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const LoginForm = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            keepSigned: false
        },

        onSubmit: (values) => {
            console.log('formik ', values)

            if (values.email === 'test@test.com' && values.password === 'test123') {
                console.log('logging in')
                dispatch(logIn(values.email))

            }
        }
    })


    const dispatch = useDispatch()

    const isAuthenticated = useSelector((state) => state.auth.authenticated)


    useEffect(() => {
        console.log(formik.values)
    }, [formik.values])

    return (
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            {isAuthenticated && <Navigate to='/main' replace={true}/>}
            <Box
                sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}/>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label=""
                        placeholder='Email'
                        name="email"
                        // autoComplete="email"
                        autoFocus
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label=""
                        type="password"
                        id="password"
                        placeholder='Password'
                        // autoComplete="current-password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                color="primary"
                                id="keepSigned"
                                checked={formik.values.keepSigned}
                                onChange={formik.handleChange}
                            />
                        }
                        label="Remember me"


                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                    <Copyright sx={{mt: 5}}/>
                </Box>
            </Box>
        </Grid>
    );
};

export default LoginForm;