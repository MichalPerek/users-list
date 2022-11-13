import React from 'react';
import {Avatar, Backdrop, Card, Container, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useState} from 'react';

const UserItemBackdrop = (props) => {

    const backdropOpen = props.backdropOpen
    const userLabelName = props.userLabelName
    const userImg = props.userImg
    const handleCloseBackdrop = props.handleCloseBackdrop
    const fireBtnHandler = props.handleFireButtonBackdrop
    const message = props.backdropMsg
    const backdropConfig = props.backdropConfig

    return (
        <Backdrop
            sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
            open={backdropOpen}
            onClick={handleCloseBackdrop}
        >
            <Container
                maxWidth="sm">

                <Card>
                    <Typography
                        component="h1"
                        variant="h6"
                        align="center"
                        color="text.primary"
                        sx={{
                            margin: '1rem'
                        }}

                    >
                        {backdropConfig.backdropMsg} <b>{userLabelName}</b> ?
                    </Typography>

                    <Stack
                        sx={{p: 2}}
                        direction="column"
                        spacing={1}
                        justifyContent="center"
                        alignItems="center"
                    >

                        <Avatar alt={userLabelName} src={userImg}
                                sx={{
                                    width: '100px',
                                    height: '100px',
                                    border: 'solid 1px black',
                                    margin: '1rem'
                                }}/>

                        <Stack
                            sx={{p: 2}}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button
                                variant="contained"
                                color={backdropConfig.buttonLeftColor}
                                onClick={backdropConfig.buttonLeftCallback}
                            >
                                {backdropConfig.buttonLeftText}
                            </Button>

                            <Button
                                variant="contained"
                                color={backdropConfig.buttonRightColor}
                                onClick={backdropConfig.buttonRightCallback}
                            >
                                {backdropConfig.buttonRightText}


                            </Button>

                        </Stack>
                    </Stack>
                </Card>

            </Container>

        </Backdrop>
    );
};

export default UserItemBackdrop;