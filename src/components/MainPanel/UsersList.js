import React, {useEffect} from 'react';
import {Container, Grid} from "@mui/material";
import UserItem from "./UserItem/UserItem";
import {useDispatch, useSelector} from "react-redux";
import {updateUsers, updateFilteredUsers} from "../../feature/auth/usersSlice";


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
                            md={6}
                            key={card.userId}>
                            <UserItem
                                userData={card}
                                key={card.userId}
                            />
                        </Grid>))
                }

            </Grid>
        </Container>

    );
};

export default UsersList;