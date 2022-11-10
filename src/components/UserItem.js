import React from 'react';
import {Avatar, Card, Chip} from "@mui/material";

const UserItem = (props) => {

    const userTitle = props.userTitle? props.userTitle : "-"
    const userFirstName = props.userFirstName? props.userFirstName : "-"
    const userLastName = props.userLastName? props.userLastName : "-"
    const userAge = props.userAge? props.userAge : "-"
    const userEmail = props.userEmail? props.userEmail : "-"
    const userId = props.userId? props.userId : "-"
    const userImg = props.userImg? props.userImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdDXECBv76wa78obNrJNqayP3o7cy4RaZNg_l_YuhSzP6qoWuHr6BTtn8JgNuHFVmSaf4&usqp=CAU"

    const userLabelName = userTitle + " " + userFirstName + " " + userLastName;
    const userLabelAge = "Age: " + userAge
    const userLabelId = "ID: " + userId

    return (
        <>
            <Card
                sx={{ height: '100%', width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}
            >
                <Avatar alt={userFirstName} src={userImg} />
                <Chip label={userLabelName} variant="outlined" />
                <Chip label={userLabelAge} variant="outlined" />
                <Chip label={userEmail} variant="outlined" />
                <Chip label={userLabelId} variant="outlined" />

            </Card>
        </>
    );
};

export default UserItem;