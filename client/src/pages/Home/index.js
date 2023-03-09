import React from 'react';
import './style.scss';
import { Sidebar } from '../../components/sidebar';
import { TableMotion } from '../../components/tableMotion';
export const Home = () => {
  return (
    <div className="container">
      <div className="appGlass">
        <Sidebar />
        <TableMotion />
      </div>
    </div>
  );
};
