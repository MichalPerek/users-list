import React from 'react';
import {Chip, Grid, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import Grid3x3Icon from "@mui/icons-material/Grid3x3";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

const UserPersonalData = (props) => {

    const userLabelName = props.userLabelName
    const userEmail = props.userEmail
    const userLabelId = props.userLabelId
    const userLabelAge = props.userLabelAge


    return (
        <Grid
            item
            xs={12} md={6}
        >

            <List>
                <ListItem>
                    <Chip sx={{
                        width: '100%',
                        margin: '1rem'
                    }} label='Personal Data:' variant="outlined"/>

                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <PersonIcon/>
                    </ListItemIcon>
                    <ListItemText
                        primary={userLabelName}/>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <EmailIcon/>
                    </ListItemIcon>
                    <ListItemText
                        primary={userEmail}
                        sx={{overflowWrap: 'break-word'}}/>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <Grid3x3Icon/>
                    </ListItemIcon>
                    <ListItemText
                        primary={userLabelId}/>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <HourglassBottomIcon/>
                    </ListItemIcon>
                    <ListItemText
                        primary={userLabelAge}/>
                </ListItem>
            </List>


        </Grid>
    );
};

export default UserPersonalData;