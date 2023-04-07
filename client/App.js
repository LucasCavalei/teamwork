import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './src/pages/Home';
import { Signup } from './src/pages/signup';
import { LoginSuccess } from './src/components/container/LoginSuccess';
import { LoginError } from './src/components/container/LoginError';
import { useSelector } from 'react-redux';

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route  exact path="/" {setIsAuthenticated() ? <Home /> : <Redirect to="/signup" />}/> */}
        <Route path="/" element={isAuthenticated ? <Home /> : <Signup />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login/success" element={<LoginSuccess />} />
        <Route exact path="/login/error" element={<LoginError />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
