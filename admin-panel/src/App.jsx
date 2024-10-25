import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './Components/DashboardLayout';
import CategoriesPage from './Pages/Category/CategoriesPage';
import CreateCategoryPage from './Pages/Category/CreateCategoryPage';
import UpdateCategoryPage from './Pages/Category/UpdateCategoryPage';
import CategoryDetailPage from './Pages/Category/CategoryDetailPage';
// import { login } from './Store/Slice/AuthSlice.js';
// Import book and user Pages similarly...

import LoginPage from './Pages/Auth/Login';
import RegisterPage from './Pages/Auth/Register';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './Store/Slice/AuthSlice';
import notify from './Utils/notify';
import { Toaster } from 'react-hot-toast';

function PrivateRoute({ children }) {
  const {user}=useSelector(state=>state.auth)
  let role=user?.role
  const dispatch=useDispatch()
  if( role=='admin' || role=='superAdmin'){
    return children
  }else{
    dispatch(logout())
    notify('error','you are not admin')
    return <Navigate to={'/login'}/>
  }
}

function App() {


  
  return (
    <>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route exact path="/" element={<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>} />

      {/* Category Routes */}
      <Route path="/categories" element={<PrivateRoute><DashboardLayout><CategoriesPage /></DashboardLayout></PrivateRoute>} />
      <Route path="/category/create" element={<PrivateRoute><DashboardLayout><CreateCategoryPage /></DashboardLayout></PrivateRoute>} />
      <Route path="/category/update/:id" element={<PrivateRoute><DashboardLayout><UpdateCategoryPage /></DashboardLayout></PrivateRoute>} />
      <Route path="/category/:id" element={<PrivateRoute><DashboardLayout><CategoryDetailPage /></DashboardLayout></PrivateRoute>} />

      {/* Book Routes */}
      {/* Add Book routes similarly... */}
      {/* <Route path="/books" element={<PrivateRoute><DashboardLayout><Book /></DashboardLayout></PrivateRoute>} />
      <Route path="/book/create" element={<PrivateRoute><DashboardLayout><CreateBook /></DashboardLayout></PrivateRoute>} />
      <Route path="/book/update/:id" element={<PrivateRoute><DashboardLayout><UpdateBook /></DashboardLayout></PrivateRoute>} />
      <Route path="/book/:id" element={<PrivateRoute><DashboardLayout><BookDetail /></DashboardLayout></PrivateRoute>} /> */}
      {/* User Routes */}
      {/* Add User routes similarly... */}
    </Routes>
    <Toaster/>
  </>
  );
}

export default App;
