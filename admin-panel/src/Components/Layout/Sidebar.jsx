import React from 'react';
import { List, ListItem, ListItemText, Drawer } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem button component={Link} to="/admin/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/admin/categories">
          <ListItemText primary="Manage Categories" />
        </ListItem>
        <ListItem button component={Link} to="/admin/users">
          <ListItemText primary="Manage Users" />
        </ListItem>
        <ListItem button component={Link} to="/admin/orders">
          <ListItemText primary="Manage Orders" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;