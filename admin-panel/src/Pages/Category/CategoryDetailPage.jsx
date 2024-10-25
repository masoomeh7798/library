import React, { useState, useEffect } from 'react';
import { Typography, Container, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

const CategoryDetailPage = () => {
  const [category, setCategory] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch(`/api/categories/${id}`);
      const data = await response.json();
      setCategory(data);
    };
    fetchCategory();
  }, [id]);

  return (
    <Container component="main" maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h5">Category Details</Typography>
        <Typography variant="body1">ID: {category.id}</Typography>
        <Typography variant="body1">Name: {category.name}</Typography>
      </Box>
    </Container>
  );
};

export default CategoryDetailPage;
