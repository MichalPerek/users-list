import React from 'react';
import {Avatar, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

const UserBio = (props) => {

    const userLabelName = props.userLabelName
    const userImg = props.userImg


    return (


        <Grid
            item
            md={12} xs={12}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'whitesmoke',
                borderBottom: '1px solid black'
            }}>

            <Avatar alt={userLabelName} src={userImg}
                    sx={{
                        width: '100px',
                        height: '100px',
                        border: 'solid 1px black',
                        margin: '1rem'
                    }}/>
            <Typography
                component="h1"
                variant="h4"
                align="center"
                color="text.primary"
                sx={{
                    margin: '1rem'
                }}

            >
                {userLabelName}
            </Typography>


        </Grid>

    );
};

export default UserBio;