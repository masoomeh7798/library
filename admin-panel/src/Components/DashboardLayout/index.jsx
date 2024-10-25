import React from 'react';
import { CssBaseline, Box, Toolbar } from '@mui/material';
import TopBar from '../TopBar';
import SideBar from '../SideBar';
const DashboardLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopBar />
      <SideBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          ml: `${240}px`, // adjust according to sidebar width
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
