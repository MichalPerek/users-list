import React from 'react';
import {Chip, Grid, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const UserWorkData = (props) => {

    const userGradeLabel = props.userGradeLabel
    const userAttendanceLabel = props.userAttendanceLabel
    const userEvaluationLabel = props.userEvaluationLabel
    const userSalaryLabel = props.userSalaryLabel


    return (
        <Grid
            item
            xs={12} md={6}>

            <List>
                <ListItem>
                    <Chip sx={{
                        width: '100%',
                        margin: '1rem'
                    }} label='Work Details:' variant="outlined"/>

                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <GradeIcon/>
                    </ListItemIcon>
                    <ListItemText
                        primary={userGradeLabel}/>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <CalendarMonthIcon/>
                    </ListItemIcon>
                    <ListItemText
                        primary={userAttendanceLabel}/>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <CreditScoreIcon/>
                    </ListItemIcon>
                    <ListItemText
                        primary={userEvaluationLabel}/>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <MonetizationOnIcon/>
                    </ListItemIcon>
                    <ListItemText
                        primary={userSalaryLabel}/>
                </ListItem>
            </List>


        </Grid>
    );
};

export default UserWorkData;