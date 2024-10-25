import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../Store/Slice/AuthSlice';
import { useDispatch } from 'react-redux';
import notify from '../../../Utils/notify';
const Login = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
 
  const navigate = useNavigate();
    const dispatch=useDispatch()
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const res=await fetch(import.meta.env.VITE_BASE_API+'auth',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({identifier,password})
        })
        const data=await res.json()
        if(data?.success){
            notify('success',data?.message)
            dispatch(login({token:data?.data?.token,user:data?.data.user})); // Call login from context
            navigate('/'); 

        }else{
            notify('error',data?.message)

        }
    }catch(error){
      console.log(error);
        notify('error','something wrong')
    }

  };
  const handleClick=()=>{
    navigate('/register'); 

  }
  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">Login</Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '1em' }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Or Phone number"
            autoComplete="email"
            autoFocus
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
        </form>
        <Button onClick={handleClick} type="button" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
            Register page
          </Button>
      </Box>
    </Container>
  );
};

export default Login;
