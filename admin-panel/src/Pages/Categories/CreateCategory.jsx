import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const CreateCategory = () => {
  const [category, setCategory] = useState('');

  const handleCreateCategory = () => {
    // Handle create category logic
  };

  return (
    <Container>
      <Typography variant="h4">Create Category</Typography>
      <TextField label="Category Name" fullWidth margin="normal" value={category} onChange={(e) => setCategory(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleCreateCategory}>
        Create Category
      </Button>
    </Container>
  );
};

export default CreateCategory;
