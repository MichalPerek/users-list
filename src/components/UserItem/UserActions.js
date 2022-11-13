import React from 'react';
import {Chip, Grid} from "@mui/material";
import Button from "@mui/material/Button";

const UserActions = (props) => {

    const extendBtnHanlder = props.extendBtnHanlder
    const fireBtnHandler = props.fireBtnHandler

    return (
        <Grid
            item
            xs={12}
        >
            <Chip sx={{
                width: '80%',
                margin: '1rem'
            }} label='Available actions:' variant="outlined"/>

            <Button variant="contained" color="success" sx={{margin: '1rem'}} onClick={extendBtnHanlder}>
                Extend contract
            </Button>
            <Button variant="contained" color="error" sx={{margin: '1rem'}} onClick={fireBtnHandler}>
                Fire employee
            </Button>
        </Grid>
    );
};

export default UserActions;