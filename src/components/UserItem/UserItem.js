import React, {useState} from 'react';
import {
    Avatar,
    Backdrop,
    Card,
    Chip,
    Container,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Stack
} from "@mui/material";
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
import {useDispatch, useSelector} from "react-redux";
import {removeFiredUser, setFiredUser} from "../usersSlice";
import UserBio from "./UserBio";
import UserPersonalData from "./UserPersonalData";
import UserWorkData from "./UserWorkData";
import UserActions from "./UserActions";


const UserItem = (props) => {

    const [open, setOpen] = useState(false);
    const [toggleMode, setToggleMode] = useState('')
    const [backdropMsg, setBackdropMsg] = useState('')


    const handleToggle = (toggleType) => {
        setOpen(!open);
        setToggleMode(toggleType)

        if (toggleMode && toggleMode === 'fire') {
            setBackdropMsg("Do you really want to fire ")

        }
        if (toggleMode && toggleMode === 'extend') {
            setBackdropMsg("Extend contract for ")

        }
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleExtendButtonCard = () => {
        handleToggle('extend')
    }

    const handleFireButtonCard = () => {
        handleToggle('fire')
        dispatch(setFiredUser(userId))
    }

    const handleFireButtonBackdrop = () => {
        dispatch(removeFiredUser(userToBeFired))

    }

    const dispatch = useDispatch()

    const userToBeFired = useSelector((state) => state.users.userToBeFired)


    const userAge = props.userData.dob.age
    const userEmail = props.userData.email
    const userImg = props.userData.picture.large ? props.userData.picture.large : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdDXECBv76wa78obNrJNqayP3o7cy4RaZNg_l_YuhSzP6qoWuHr6BTtn8JgNuHFVmSaf4&usqp=CAU"
    const userId = props.userData.userId

    const userLabelName = props.userData.name.title + " " + props.userData.name.first + " " + props.userData.name.last;
    const userGradeLabel = "Grade: " + props.userData.grade
    const userAttendanceLabel = "Attendance: " + props.userData.attendance + "%"
    const userSalaryLabel = "Salary: " + props.userData.salary + "$"
    const userEvaluationLabel = "Evaluation: " + props.userData.salary + "%"
    const userLabelAge = "Age: " + userAge
    const userLabelId = "ID: " + userId


    return (<Container>

        <Card sx={{border: '1px solid black'}}>

            <Grid
                container
                spacing={0}
                direction="row"
                justifyContent="center"
                alignItems="flex-start">

                <UserBio userLabelName={userLabelName} userImg={userImg}/>
                <UserPersonalData userLabelName={userLabelName} userEmail={userEmail} userLabelId={userLabelId}
                                  userLabelAge={userLabelAge}/>

                <UserWorkData userGradeLabel={userGradeLabel} userAttendanceLabel={userAttendanceLabel}
                              userEvaluationLabel={userEvaluationLabel} userSalaryLabel={userSalaryLabel}/>


                <UserActions extendBtnHanlder={handleExtendButtonCard} fireBtnHandler={handleFireButtonCard}  />


            </Grid>

            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={open}
                onClick={handleClose}
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
                            {backdropMsg} <b>{userLabelName}</b> ?
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
                                <Button variant="contained" color="error"
                                        onClick={handleFireButtonBackdrop}>Fire</Button>
                                <Button variant="contained" color="success">Don't fire</Button>
                            </Stack>
                        </Stack>
                    </Card>

                </Container>

            </Backdrop>

        </Card>
    </Container>);
};

export default UserItem;