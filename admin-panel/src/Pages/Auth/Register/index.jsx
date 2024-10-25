import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import notify from '../../../Utils/notify';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
    const navigate=useNavigate()
    
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const res=await fetch(import.meta.env.VITE_BASE_API+'auth/register',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({email,password,phone})
        })
        const data=await res.json()
        if(data.success){
            notify('success',data?.message)

            navigate('/login')

        }else{
            notify('error',data?.message)

        }
    }catch(error){
        notify('error','something wrong')
    }
  };

  const handleClick=()=>{
    navigate('/login'); 

  }
  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">Register</Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '1em' }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Phone Number"
            autoComplete="phone"
            autoFocus
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
            Sign Up
          </Button>
        </form>
        <Button onClick={handleClick} type="button" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
            Login page
          </Button>
      </Box>
    </Container>
  );
};

export default Register;
