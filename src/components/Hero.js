import React from 'react';
import {Container, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Hero = () => {
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
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
                >
                    Employees list
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
   This is a list of top employees from your company on this month.
                </Typography>
                <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <Button variant="contained">Main call to action</Button>
                    <Button variant="outlined">Secondary action</Button>
                </Stack>
            </Container>
        </Box>
    );
};

export default Hero;