import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from './Pages/Auth';
import AdminPanel from './Components/AdminPanel';
import CategoryCRUD from './Pages/Categories/CategoryCRUD';
import CreateCategory from './Pages/Categories/CreateCategory';
import UpdateCategory from './Pages/Categories/UpdateCategory';
import GetAllCategories from './Pages/Categories/GetAllCategories';
import GetOneCategory from './Pages/Categories/GetOneCategory';
import Dashboard from './components/Dashboard';
import { CssBaseline } from '@mui/material';
import { Toaster } from 'react-hot-toast';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Home from './Pages/Home';


function App() {
  return (
    <>
    <CssBaseline/>
    <Routes>
        <Route exact path="/"  element={<Home/>} />
        <Route exact path="/auth"  element={<Auth/>} />
        <Route exact path="/login"  element={<Login/>} />
        <Route exact path="/register"  element={<Register/>} />
        <Route path="/admin" element={<AdminPanel/>} />
        <Route path="/admin/dashboard" element={<Dashboard/>} />
        <Route path="/admin/categories" element={<CategoryCRUD/>} />
        <Route path="/admin/categories/create" element={<CreateCategory/>} />
        <Route path="/admin/categories/update/:id" element={<UpdateCategory/>} />
        <Route path="/admin/categories/all" element={<GetAllCategories/>} />
        <Route path="/admin/categories/:id" element={<GetOneCategory/>} />
    </Routes>
    <Toaster/>
    </>
  );
}

export default App;
