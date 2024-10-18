import React, { useState } from 'react';
import { Container, Button, Typography } from '@mui/material';
import Login from './Login';
import Register from './Register';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Container sx={{mx:'auto',width:'50%'}} >
      <Typography variant="h4">{isLogin ? 'Login' : 'Register'}</Typography>
      {isLogin ? <Login /> : <Register />}
      <Button onClick={toggleForm}>
        {isLogin ? 'Switch to Register' : 'Switch to Login'}
      </Button>
    </Container>
  );
};

export default Auth;