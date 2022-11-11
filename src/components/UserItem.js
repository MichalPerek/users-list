import React from 'react';
import {Avatar, Card, Chip, Container, Grid, List, ListItem} from "@mui/material";

const UserItem = (props) => {

    const userTitle = props.userTitle ? props.userTitle : "-"
    const userFirstName = props.userFirstName ? props.userFirstName : "-"
    const userLastName = props.userLastName ? props.userLastName : "-"
    const userAge = props.userAge ? props.userAge : "-"
    const userEmail = props.userEmail ? props.userEmail : "-"
    const userId = props.userId ? props.userId : "-"
    const userImg = props.userImg ? props.userImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdDXECBv76wa78obNrJNqayP3o7cy4RaZNg_l_YuhSzP6qoWuHr6BTtn8JgNuHFVmSaf4&usqp=CAU"

    const userLabelName = userTitle + " " + userFirstName + " " + userLastName;
    const userLabelAge = "Age: " + userAge
    const userLabelId = "ID: " + userId

    return (
        <Container>

            <Grid
                container
                spacing={4}
                direction="row"
                justifyContent="flex-start"
                alignItems="center">


                <Grid
                    item
                    xs={1}>
                    <Avatar alt={userFirstName} src={userImg}/>
                </Grid>

                <Grid
                    item
                    md={3} xs={9}>

                    <Grid
                        container
                        spacing={4}
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="center">

                        <Chip label={userLabelName} variant="outlined"/>
                        <Chip label={userLabelAge} variant="outlined"/>

                    </Grid>


                </Grid>

                <Grid
                    item
                    md={3} xs={9}>

                    <Grid
                        container
                        spacing={4}
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="center">

                        <Chip label={userEmail} variant="outlined"/>
                        <Chip label={userLabelId} variant="outlined"/>

                    </Grid>


                </Grid>


                {/*<Grid*/}
                {/*    item>*/}
                {/*    <Chip label={userLabelAge} variant="outlined"/>*/}
                {/*</Grid>*/}

                {/*<Grid*/}
                {/*    item>*/}
                {/*    <Chip label={userEmail} variant="outlined"/>*/}
                {/*</Grid>*/}

                {/*<Grid*/}
                {/*    item>*/}
                {/*    <Chip label={userLabelId} variant="outlined"/>*/}
                {/*</Grid>*/}



            </Grid>
        </Container>
    );
};

export default UserItem;