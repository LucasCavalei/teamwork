import React from 'react';
import './style.scss';
import { MainTable } from '../../components/MainTable';
import { Sidebar } from '../../components/sidebar';
import { TableMotion } from '../../components/tableMotion';
export const Home = () => {
  return (
    <div className="container">
      <div className="appGlass">
        <Sidebar />
        {/* <MainTable /> */}
        <TableMotion />
      </div>
    </div>
  );
};
