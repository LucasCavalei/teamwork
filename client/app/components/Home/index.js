import React from 'react';
import './style.scss';
import { Post } from '../Posts';
import { Task } from '../forms/Task';
import { Sidebar } from '../sidebar';

export const Home = () => {
  return (
    <div className="container">
      <div className="appGlass">
        <Sidebar />
        <Post />
        <Task />
      </div>
    </div>
  );
};
