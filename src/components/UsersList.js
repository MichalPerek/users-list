import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {Container, Grid, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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

    return (<Container maxWidth="md">
            <Grid container spacing={4}>
                {users.map((card) => (
                    <Grid item  xs={12}  xl={6}>
                        e
                    </Grid>
                ))}

            </Grid>
        </Container>

    );
};

export default UsersList;