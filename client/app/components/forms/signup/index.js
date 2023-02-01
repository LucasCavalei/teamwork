import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import './index.scss';
import '../../Home/style.scss';

export const Signup = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (e) => {
    const userData = {
      name: e.name,
      email: e.email,
      password: e.password,
    };
  };
  return (
    <div className="container">
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Hello!</h1>
        <label>Your Name: </label>
        <input type="text" {...register('name')} placeholder="Enter you name" />
        <label> Email </label>
        <input
          type="text"
          {...register('email')}
          placeholder="you email adress here"
        />
        <label> Password </label>
        <input type="password" {...register('password')} />
        <label> Confirm password</label>
        <input type="password" {...register('password')} />
        <button className="button button1" type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
};
