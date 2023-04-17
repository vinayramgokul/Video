//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import RegisterForm from './components/Register'

function App() {
  return (
    
    <Router>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/Register" element={<RegisterForm />} />
    <Route path="/Home" element={<Home />} />

    </Routes>
    </Router>
    
  );

    
  
}

export default App;


