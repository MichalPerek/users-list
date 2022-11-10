import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {Container, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const UsersList = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {

        fetch("https://randomuser.me/api/?results=20")
            .then((response) => response.json())
            .then((data) => {
            console.log("data ", data)
        })
            .catch((error) => {
                console.error("Error: ", error)
            })


    }, [])

    return (<Container maxWidth="md">

        </Container>

    );
};

export default UsersList;