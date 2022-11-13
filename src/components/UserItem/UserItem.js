import React, {useState} from 'react';
import {
    Card,
    Container,
    Grid,
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {fireUser, keepUser, setFiredUser} from "../usersSlice";
import UserBio from "./UserBio";
import UserPersonalData from "./UserPersonalData";
import UserWorkData from "./UserWorkData";
import UserActions from "./UserActions";
import UserItemBackdrop from "./UserItemBackdrop";


const UserItem = (props) => {

    const [backdropOpen, setBackdropOpen] = useState(false);
    const [backdropConfig, setBackdropConfig] = useState({})

    const dispatch = useDispatch()

    const handleExtendButtonCard = () => {

        setBackdropOpen(!backdropOpen);
        setBackdropConfig({
            backdropMsg: "Do you really want to extend contract for ",
            buttonLeftText: 'Extend contract',
            buttonLeftColor: 'success',
            buttonLeftCallback: () => handleExtendButtonBackdrop(),
            buttonRightText: 'Do not extend contract',
            buttonRightColor: 'error',
            buttonRightCallback: ''
        })
    }

    const handleExtendButtonBackdrop = () => {
        dispatch(keepUser(userId))

    }

    const handleFireButtonCard = () => {
        setBackdropOpen(!backdropOpen);
        setBackdropConfig({
            backdropMsg: "Do you really want to fire ",
            buttonLeftText: 'Fire employee',
            buttonLeftColor: 'error',
            buttonLeftCallback: () => handleFireButtonBackdrop(),
            buttonRightText: 'Do not fire employee',
            buttonRightColor: 'success',
            buttonRightCallback: ''
        })
    }

    const handleCloseBackdrop = () => {
        setBackdropOpen(false);
    };

    const handleFireButtonBackdrop = () => {
        dispatch(fireUser(userId))
    }

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
                backdropConfig={backdropConfig}
            />

        </Card>
    </Container>);
};

export default UserItem;