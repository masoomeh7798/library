import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import Sidebar from './Layout/Sidebar';
import Topbar from './Layout/Topbar';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Container style={{ flexGrow: 1, padding: '20px' }}>
        <Topbar />
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">Total Users</Typography>
                <Typography variant="h6">150</Typography>
                <Button component={Link} to="/admin/users" variant="contained" color="primary">
                  View Users
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">Total Categories</Typography>
                <Typography variant="h6">25</Typography>
                <Button component={Link} to="/admin/categories/all" variant="contained" color="primary">
                  View Categories
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">Total Orders</Typography>
                <Typography variant="h6">75</Typography>
                <Button component={Link} to="/admin/orders" variant="contained" color="primary ">
                  View Orders
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;