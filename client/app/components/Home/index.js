import React from 'react';
import './style.scss';
import { MainTable } from '../MainTable';
import { Sidebar } from '../sidebar';
export const Home = () => {
  return (
    <div className="container">
      <div className="appGlass">
        <Sidebar />
        <MainTable />
      </div>
    </div>
  );
};
