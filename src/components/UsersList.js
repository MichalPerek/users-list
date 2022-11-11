import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {Container, Grid, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import UserItem from "./UserItem";

const UsersList = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {

        fetch("https://randomuser.me/api/?results=20")
            .then((response) => response.json())
            .then((data) => {
                console.log("data ", data.results)
                setUsers(data.results)
            })
            .catch((error) => {
                console.error("Error: ", error)
            })


    }, [])

    return (<Container maxWidth="lg">
            <Grid
                container
                spacing={8}
                direction="row"
                justifyContent="center"
                alignItems="center">

                {
                    users.map((card) =>

                    (<Grid
                        item
                        xs={12} >
                        <UserItem
                            userImg ={card.picture.large}
                            userTitle = {card.name.title}
                            userFirstName = {card.name.first}
                            userLastName = {card.name.last}
                            userAge = {card.dob.age}
                            userEmail = {card.email}
                            userId = {card.id.value}



                        />
                    </Grid>))
                }

            </Grid>
        </Container>

    );
};

export default UsersList;