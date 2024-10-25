import React, { useState, useEffect } from 'react';
import { Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async()=>{
      try {
        const response = await fetch(import.meta.env.VITE_BASE_API + 'category');
        const data = await response.json();
        setCategories(data?.data?.categories);
      } catch (error) {
        console.log(error);
      }
    })() 
  }, []);

  
  return (
    <div>
      <Typography variant="h4" gutterBottom>Manage Categories</Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/category/create')} sx={{ mb: 2 }}>
        Add Category
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>title</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>subCategory</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories?.map((category) => (
              <TableRow key={category._id}>
                <TableCell>{category._id}</TableCell>
                <TableCell>{category?.title}</TableCell>
                <TableCell>{category?.isActive ? "acive":"not active"}</TableCell>
                <TableCell>{category?.subCategory?.title}</TableCell>
                <TableCell>
                  <Button onClick={() => navigate(`/category/${category._id}`)} variant="outlined" color="primary">
                    View
                  </Button>
                  <Button onClick={() => navigate(`/category/update/${category._id}`)} variant="outlined" color="secondary" sx={{ ml: 1 }}>
                    Edit
                  </Button>
                  <Button  variant="outlined" color="error" sx={{ ml: 1 }}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CategoriesPage;
