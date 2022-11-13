import React from 'react';
import {Card, Container} from "@mui/material";
import Typography from "@mui/material/Typography";

const UserOverlayFired = () => {
    return (
        <Card sx={{
            position: 'absolute',
            top: '0',
            left: '0',
            height: '100%',
            width: '100%',
            display: 'block',
            zIndex: '999',
            backgroundColor: 'rgba(254, 18, 18, 0.7)'

        }}>
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    width: '100%'
                }}>

                <Typography
                    component="h3"
                    variant="h3"
                    align="center"
                    color="text.primary"
                    sx={{
                        margin: '1rem',
                        color: 'white'
                    }}

                >
                    <b>Employee fired!</b>
                </Typography>
            </Container>
        </Card>
    );
};

export default UserOverlayFired;