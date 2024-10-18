import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  return (
    <Container>
      <Typography variant="h4">Admin Panel</Typography>
      <Button component={Link} to="/admin/dashboard" variant="contained" color="primary">
        Dashboard
      </Button>
      <Button component={Link} to="/admin/categories" variant="contained" color="primary">
        Manage Categories
      </Button>
      <Button component={Link} to="/admin/users" variant="contained" color="primary">
        Manage Users
      </Button>
    </Container>
  );
};

export default AdminPanel;