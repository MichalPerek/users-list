import React from 'react';
import {Fab, Stack} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {useDispatch} from "react-redux";
import {updateUsers, updateFilteredUsers} from "./usersSlice";

const Footer = () => {

    const dispatch = useDispatch()

    const buttonHandler = () => {
        fetch("https://randomuser.me/api/?results=20")
            .then((response)=>response.json())
            .then((data) => {
                console.log(data.results)
                dispatch(updateUsers(data.results))
                dispatch(updateFilteredUsers())
            })
            .catch((error) => {
            console.error("Error: ", error)
        })


    }

    return (
        <Stack
            sx={{p: 4}}
            direction="row"
            spacing={2}
            justifyContent="center"
        >
            <Fab variant="extended"
                 sx={{backgroundColor: '#ACA39A'}}
                 onClick={buttonHandler}
            >
                <AddCircleOutlineIcon
                    sx={{m: 1}}

                />
                Load more
            </Fab>
        </Stack>
    );
};

export default Footer;