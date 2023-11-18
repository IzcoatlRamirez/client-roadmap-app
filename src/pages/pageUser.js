import React from 'react';
import Box from '@mui/material/Box';
import MenuMain from '../components/MenuMain';
import TopBar from '../components/TopBar';

// import { useAuth } from '../context/AuthContext';

export default function PageUser() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <TopBar></TopBar>
      <MenuMain></MenuMain>
    </Box>
  );
}
