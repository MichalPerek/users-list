import React from 'react';
import {Container} from "@mui/material";
import Typography from "@mui/material/Typography";
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
                    sx={{marginTop: '5rem'}}
                >
                    Employees list
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    This is a list of your company's employees, decide if you want to keep them, or fire them. Keep in
                    mind that you have to think of reduced budget for next year!
                </Typography>
            </Container>
        </Box>
    );
};

export default Hero;