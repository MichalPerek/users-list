import React from 'react';
import {Container, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Hero = () => {
    return (
        <Box
            sx={{
                bgcolor: '#F6F5F4',
                pt: 8,
                pb: 6,
            }}
        >
            <Container maxWidth="md">
                <Typography
                    component="h1"
                    variant="h3"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    sx={{marginTop: '1rem'}}
                >
                    Employees list
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    This is a list of your company's employees, decide if you want to keep them, or fire them. Keep in
                    mind that you have to think of reduced budget for next year!
                </Typography>
                <Stack
                    sx={{pt: 4}}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <Button variant="contained">Reset all values</Button>
                    <Button variant="outlined">Submit changes</Button>
                </Stack>
            </Container>
        </Box>
    );
};

export default Hero;