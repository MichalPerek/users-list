import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export default function Navbar() {
    return (


        <Box sx={{flexGrow: 1}}>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: 'rgba(106, 96, 92, 1)',
                    zIndex: '1000'
                }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{flexGrow: 1, padding: '0.5rem'}}>
                        <i>CruelCorp ® HR Panel</i>
                    </Typography>
                </Toolbar>
            </AppBar>


        </Box>


    );
}
