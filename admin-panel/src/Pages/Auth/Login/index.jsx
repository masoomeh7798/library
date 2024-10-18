import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import useFormFields from '../../../Utils/useFormFields';
import notify from '../../../Utils/notify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../Store/Slice/AuthSlice';


const Login = () => {
  const [fields,handleChange]=useFormFields()
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      const res=await fetch(import.meta.env.VITE_BASE_API+'auth',{
        method:'POST',
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(fields)
      })
      const data=await res.json()
      console.log(data);
      if(!data.success){
        notify('error',data?.message)
      }else{
        notify('success',data?.message)
        dispatch(login({token:data?.data?.token,user:data?.data?.user}))
        navigate('/admin/dashboard')
      }
      

    } catch (error) {
      console.log(error);
      notify('error','Something went wrong')
    }
  };

  return (
   <Box  sx={{mx:'auto',width:'50%'}}>
    <form onSubmit={handleLogin} >
      <TextField name='identifier' label="identifier" fullWidth margin="normal" onChange={e=>handleChange(e)} />
      <TextField name='password' label="Password" type="password" fullWidth margin="normal"  onChange={e=>handleChange(e)}/>
      <Button type="submit" variant="contained" color="primary">Login</Button>
    </form>
    </Box>
  );
};

export default Login;