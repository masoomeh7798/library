import React from 'react';
import { TextField, Button } from '@mui/material';
import useFormFields from '../../../Utils/useFormFields';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import notify from '../../../Utils/notify';

const Register = () => {
  const [fields,handleChange]=useFormFields()
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleRegister = async(e) => {
    e.preventDefault();
    try {
      const res=await fetch(import.meta.env.VITE_BASE_API+'auth/register',{
        method:'POST',
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(fields)
      })
      const data=await res.json()
      if(!data.success){
        notify('error',data?.message)
      }
      notify('success',data?.message)
      navigate('/login')

    } catch (error) {
      notify('error','Something went wrong')
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <TextField name="email" label="Email" fullWidth margin="normal" onChange={e=>handleChange(e)}/>
      <TextField name="phone" label="phone" type="text" fullWidth margin="normal" onChange={e=>handleChange(e)}/>
      <TextField name="password" label="Password" type="password" fullWidth margin="normal" onChange={e=>handleChange(e)}/>
      <Button type="submit" variant="contained" color="primary">Register</Button>
    </form>
  );
};

export default Register;


