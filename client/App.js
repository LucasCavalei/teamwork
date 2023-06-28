import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './src/pages/Home';
import { Login } from './src/pages/Login';
import { LoginSuccess } from './src/components/container/LoginSuccess';
import { LoginError } from './src/components/container/LoginError';
import { useSelector } from 'react-redux';

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/login/success" element={<LoginSuccess />} />
        <Route exact path="/login/error" element={<LoginError />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
