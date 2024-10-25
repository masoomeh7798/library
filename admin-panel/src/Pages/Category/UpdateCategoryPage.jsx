import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography, Container, Box, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Switch } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UpdateCategoryPage = () => {
  const {id}=useParams()
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
        setSubCategory(data?.data?.categories)

        const resC=await fetch(import.meta.env.VITE_BASE_API + `category/${id}`)
        const dataC=await resC.json()
        setName(dataC?.data?.category?.title)
        setSelectedSubCategory(dataC?.data?.category?.subCategory?._id)
        setIsActive(dataC?.data?.category.isActive)
        console.log(selectedSubCategory,dataC);
      } catch (error) {
        console.log(error);
      }
    })()

  }, [id]);
  const items = subCategory?.map((e, index) =>
    <MenuItem key={index} value={e?._id}>{e?.title}</MenuItem>

  )

  const handleSubmit = async (e) => {
    e.preventDefault();
    (async () => {
      try {
        const res = await fetch(import.meta.env.VITE_BASE_API + `category/${id}`, {
          method: 'PATCH',
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
        <Typography variant="h5">Update Category</Typography>
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
              labelId="sub-category-label"
              value={selectedSubCategory}
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
            label={isActive ? "Is Active" : "not active"}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Save
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default UpdateCategoryPage;