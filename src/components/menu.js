import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Typography from '@mui/material/Typography';

import { purple, red } from '@mui/material/colors';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography sx={{mr:2}} variant="h6" color="inherit" component="div">
            <Link to='/books'  style={{ color: '#FFF' }}>Books</Link>
          </Typography>
          <Typography  sx={{mr:2}} variant="h6" color="inherit" component="div">
            <Link to='/characters'  style={{ color: '#FFF' }}>Characters</Link>
          </Typography>
          <Typography  sx={{mr:2}} variant="h6" color="inherit" component="div">
            <Link to='/houses'  style={{ color: '#FFF' }}>Houses</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


//draft: 
//steps: 
// step 1 : check which button is clicked and update the reducer 
// step 2 : according to the reducer jump to the specific page 