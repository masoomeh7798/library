import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const GetOneCategory = () => {
  const { id } = useParams();
  const [category, setCategory] = useState({});

  // Handle get one category logic

  return (
    <Container>
      <Typography variant="h4">Category {id}</Typography>
      <Typography variant="body1">Name: {category.name}</Typography>
    </Container>
  );
};

export default GetOneCategory;