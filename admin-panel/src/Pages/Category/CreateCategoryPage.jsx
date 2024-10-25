import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography, Container, Box, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Switch } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CreateCategoryPage = () => {
  const [name, setName] = useState('');
  const [subCategory, setSubCategory] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [isActive, setIsActive] = useState(false);
  const {token}=useSelector(state=>state.auth)
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(import.meta.env.VITE_BASE_API + 'category')
        const data = await res.json()
        setSubCategory(data.data.categories)
        console.log(subCategory);
      } catch (error) {
        console.log(error);
      }
    })()

  }, []);
  const items = subCategory?.map((e, index) =>(
    <MenuItem key={index} value={e?._id}>{e?.title}</MenuItem>)

  )

  const handleSubmit = async (e) => {
    e.preventDefault();
    (async () => {
      try {
        const res = await fetch(import.meta.env.VITE_BASE_API + 'category', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            authorization:`bearer ${token}`
           },
          body: JSON.stringify({ title: name, subCategory:selectedSubCategory, isActive })
        });
        const data = await res.json()
        navigate('/categories');

      } catch (error) {
        console.log(error);
      }
    })()

  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h5">Create Category</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Category Name"
            fullWidth
            margin="normal"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="sub-category-label">Subcategory</InputLabel>
            <Select
            value={selectedSubCategory}
              labelId="sub-category-label"
              onChange={(e) => setSelectedSubCategory(e.target.value)}
              label="Subcategory"
            >
              {items}
            </Select>
          </FormControl>
          <FormControlLabel
            control={
              <Switch
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
                color="primary"
              />
            }
            label="Is Active"
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Save
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default CreateCategoryPage;