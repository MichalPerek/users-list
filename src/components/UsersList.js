import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {Container, Grid, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import UserItem from "./UserItem/UserItem";
import {useDispatch, useSelector} from "react-redux";
import {updateUsers,updateFilteredUsers} from "./usersSlice";


const UsersList = () => {

    const dispatch = useDispatch();

    const usersToDisplay = useSelector((state) => state.users.usersFiltered)


    useEffect(() => {

         fetch("https://randomuser.me/api/?results=20")
            .then((response) => response.json())
            .then((data) => {
                dispatch(updateUsers(data.results))
                dispatch(updateFilteredUsers())
            })
            .catch((error) => {
                console.error("Error: ", error)
            })




    }, [])

    // useEffect(() => {
    //     console.log("rerender list")
    // }, [usersToDisplay])

    return (<Container maxWidth="xl"
        >
            <Grid
                container
                spacing={4}
                direction="row"
                justifyContent="center"
                alignItems="center">

                {
                    usersToDisplay && usersToDisplay.map((card) =>

                        (<Grid
                            item
                            xs={12}
                            md={6}>
                            <UserItem
                                userData={card}
                            />
                        </Grid>))
                }

            </Grid>
        </Container>

    );
};

export default UsersList;