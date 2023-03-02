import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './src/pages/Home';
import { Signup } from './src/pages/signup';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
