import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Error from './components/Error';

function App() {
  return (
     <>
   <Header/>  
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/error' element={<Error/>}/>

   </Routes>
    </>
  );
}

export default App;
