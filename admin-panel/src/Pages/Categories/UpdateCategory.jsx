import React, { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';
import { useParams } from 'react-router-dom';

const UpdateCategory = () => {
  const { id } = useParams();
  const [category, setCategory] = useState('');

  const handleUpdateCategory = () => {
    // Handle update category logic
  };

  return (
    <Container>
      <Typography variant="h4">Update Category {id}</Typography>
      <TextField label="Category Name" fullWidth margin="normal" value={category} onChange={(e) => setCategory(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleUpdateCategory}>
        Update Category
      </Button>
    </Container>
  );
};

export default UpdateCategory;