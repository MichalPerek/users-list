import React from 'react';
import {Avatar, Card, Chip, Container, Grid, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import Typography from "@mui/material/Typography";
import GradeIcon from '@mui/icons-material/Grade';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Button from "@mui/material/Button";


const UserItem = (props) => {

    const userTitle = props.userTitle ? props.userTitle : "-"
    const userFirstName = props.userFirstName ? props.userFirstName : "-"
    const userLastName = props.userLastName ? props.userLastName : "-"
    const userAge = props.userAge ? props.userAge : "-"
    const userEmail = props.userEmail ? props.userEmail : "-"
    const userId = Math.round(Math.random() * 1000000)
    const userImg = props.userImg ? props.userImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdDXECBv76wa78obNrJNqayP3o7cy4RaZNg_l_YuhSzP6qoWuHr6BTtn8JgNuHFVmSaf4&usqp=CAU"

    const userLabelName = userTitle + " " + userFirstName + " " + userLastName;
    const userLabelAge = "Age: " + userAge
    const userLabelId = "ID: " + userId

    const userGradeLabel = "Grade: " + Math.round((Math.random() * 10 + 1))
    const userAttendanceLabel = "Attendance: " + Math.floor((Math.random() * 100)) + "%"
    const userSalaryLabel = "Salary: " + Math.floor((Math.random() * 1000 + 200)) + "$"
    const userEvaluation = "Evaluation: " + Math.floor((Math.random() * 100)) + "%"

    const handleExtendButton = () => {
        console.log("extend")
    }

    const handleFireButton = () => {
        console.log("fire")
    }


    return (<Container>

        <Card sx={{border: '1px solid black'}}>

            <Grid
                container
                spacing={0}
                direction="row"
                justifyContent="center"
                alignItems="center">


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

                    <Avatar alt={userFirstName} src={userImg}
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
                                primary={userEmail}/>
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
                                primary={userEvaluation}/>
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

                <Grid
                    item
                    xs={12}
                    >
                    <Chip sx={{
                        width: '80%',
                        margin: '1rem'
                    }} label='Available actions:' variant="outlined"/>

                    <Button variant="contained" color="success" sx={{margin: '1rem'}} onClick={handleExtendButton}>
                        Extend contract
                    </Button>
                    <Button variant="contained" color="error" sx={{margin: '1rem'}} onClick={handleFireButton}>
                        Fire employee
                    </Button>
                </Grid>

            </Grid>

        </Card>
    </Container>);
};

export default UserItem;