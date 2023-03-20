import React from 'react';
import './style.scss';
import apiService from '../../services/apiService';
import { Sidebar } from '../../components/sidebar';
import { TableMotion } from '../../components/tableMotion';
export const Home = () => {
  return (
    <div className="container">
      <div className="appGlass">
        <Sidebar />
        <TableMotion apiService={apiService} />
      </div>
    </div>
  );
};
