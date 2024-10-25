import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Store/Slice/AuthSlice';
const TopBar = () => {
  const {token}=useSelector(state=>state.auth)
  const dispatch=useDispatch()
  const navigate = useNavigate();

  const handleLogout = () => {
  dispatch(logout());
    navigate('/login');
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Library Admin Dashboard
        </Typography>
        {token && (
          <Button color="inherit" sx={{ marginLeft: 'auto' }} onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
