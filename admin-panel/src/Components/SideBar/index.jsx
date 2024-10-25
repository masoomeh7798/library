import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import BookIcon from '@mui/icons-material/MenuBook';
import PeopleIcon from '@mui/icons-material/People';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

const SideBar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap>
          Library Admin
        </Typography>
      </Toolbar>
      <List>
        <ListItem button component={NavLink} to="/categories">
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Categories" />
        </ListItem>
        <ListItem button component={NavLink} to="/books">
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <ListItemText primary="Books" />
        </ListItem>
        <ListItem button component={NavLink} to="/users">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideBar;
