import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Baloon from './Baloon';
import Form from './FormPage';

const AppRoutes = () => {
  return (
    <Routes> 
      <Route path="/" element={<Baloon />} /> 
      <Route path="/form" element={<Form />} /> 
    </Routes>
  );
};

export default AppRoutes;

