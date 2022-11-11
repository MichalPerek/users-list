import React from 'react';
import {Fab} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";

const handleFabUp = () => {
    window.scrollTo({left: 0, top: 0, behavior: "smooth"});
}

const handleFabDown = () => {
    window.scrollTo({left: 0, top: document.body.scrollHeight, behavior: "smooth"});
}

const NavigationFabs = () => {
    return (
        <>
            <Fab
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    right: 20
                }}
                onClick={handleFabDown}
            >
                <KeyboardArrowDownIcon/>
            </Fab>

            <Fab
                sx={{
                    position: 'fixed',
                    top: 80,
                    right: 20
                }}
                onClick={handleFabUp}
            >
                <UpIcon/>
            </Fab>
        </>
    );
};

export default NavigationFabs;