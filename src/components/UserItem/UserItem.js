import React, {useState} from 'react';
import {
    Card,
    Container,
    Grid,
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {removeFiredUser, setFiredUser} from "../usersSlice";
import UserBio from "./UserBio";
import UserPersonalData from "./UserPersonalData";
import UserWorkData from "./UserWorkData";
import UserActions from "./UserActions";
import UserItemBackdrop from "./UserItemBackdrop";


const UserItem = (props) => {

    const [backdropOpen, setBackdropOpen] = useState(false);
    const [toggleMode, setToggleMode] = useState('')
    const [backdropMsg, setBackdropMsg] = useState('')


    const handleToggle = (toggleType) => {
        setBackdropOpen(!backdropOpen);
        setToggleMode(toggleType)

        if (toggleMode && toggleMode === 'fire') {
            setBackdropMsg("Do you really want to fire ")

        }
        if (toggleMode && toggleMode === 'extend') {
            setBackdropMsg("Extend contract for ")

        }
    };
    const handleCloseBackdrop = () => {
        setBackdropOpen(false);
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
    const userImg = props.userData.picture.large ?
        props.userData.picture.large :
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdDXECBv76wa78obNrJNqayP3o7cy4RaZNg_l_YuhSzP6qoWuHr6BTtn8JgNuHFVmSaf4&usqp=CAU"
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

                <UserBio
                    userLabelName={userLabelName}
                    userImg={userImg}
                />
                <UserPersonalData
                    userLabelName={userLabelName}
                    userEmail={userEmail}
                    userLabelId={userLabelId}
                    userLabelAge={userLabelAge}
                />

                <UserWorkData
                    userGradeLabel={userGradeLabel}
                    userAttendanceLabel={userAttendanceLabel}
                    userEvaluationLabel={userEvaluationLabel}
                    userSalaryLabel={userSalaryLabel}
                />

                <UserActions
                    extendBtnHanlder={handleExtendButtonCard}
                    fireBtnHandler={handleFireButtonCard}
                />


            </Grid>

            <UserItemBackdrop
                userImg={userImg}
                userLabelName={userLabelName}
                handleCloseBackdrop={handleCloseBackdrop}
                fireBtnHandler={handleFireButtonBackdrop}
                backdropOpen={backdropOpen}
            />

        </Card>
    </Container>);
};

export default UserItem;