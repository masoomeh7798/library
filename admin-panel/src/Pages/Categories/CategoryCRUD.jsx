import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const CategoryCRUD = () => {
  return (
    <Container>
      <Typography variant="h4">Category Management</Typography>
      <Button component={Link} to="/admin/categories/create" variant="contained" color="primary">
        Create Category
      </Button>
      <Button component={Link} to="/admin/categories/all" variant="contained" color="primary">
        Get All Categories
      </Button>
    </Container>
  );
};

export default CategoryCRUD;