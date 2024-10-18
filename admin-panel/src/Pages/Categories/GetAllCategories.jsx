import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem } from '@mui/material';

const GetAllCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Handle get all categories logic
  }, []);

  return (
    <Container>
      <Typography variant="h4">All Categories</Typography>
      <List>
        {categories.map((category) => (
          <ListItem key={category.id}>{category.name}</ListItem>
        ))}
      </List>
    </Container>
  );
};

export default GetAllCategories;