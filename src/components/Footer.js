import React from 'react';
import {Fab, Stack} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const Footer = () => {

    const buttonHandler = () => {
        console.log("heh")
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