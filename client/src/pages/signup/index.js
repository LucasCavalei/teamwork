import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import apiService from '../../services/apiService';
import GoogleButton from 'react-google-button';
import { useSelector, useDispatch } from 'react-redux';
import { setIsAuthenticated, setAuthUser } from '../../redux/authSlice';
import { Link, useNavigate } from 'react-router-dom';

import './index.scss';
export const Signup = () => {
  const { register, handleSubmit } = useForm();
  //the user, esta dentro do configureStore authUser, Está no initialState
  const { authUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //busca usuario atraves isUserAuthenticated interception no backend
  const fetchAuthUser = async () => {
    const response = await axios
      .get('http://localhost:8888/auth/user', { withCredentials: true })
      .catch((err) => {
        console.log('Erro ao buscar usuario autenticado', err);
        dispatch(setIsAuthenticated(false));
        dispatch(setAuthUser(null));
      });
    if (response && response.data) {
      dispatch(setIsAuthenticated(true));
      dispatch(setAuthUser(response.data));
      navigate('/');
    }
  };

  const redirectToGoogleSSO = async () => {
    // in typescript
    // let timer: NodeJS.Timeout | null = null;
    let timer = null;
    const googleLoginURL = 'http://localhost:8888/auth/google';
    const newWindow = window.open(
      googleLoginURL,
      '_blank',
      'width=500,height=600'
    );

    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          console.log("Yay we're authenticated");
          fetchAuthUser();
          if (timer) clearInterval(timer);
        }
      }, 500);
    }
  };

  const sendData = async (userData) => {
    await apiService.createUser(userData);
  };

  const onSubmit = (e) => {
    const userData = {
      name: e.name,
      email: e.email,
      password: e.password,
    };
    sendData(userData);
  };
  return (
    <div className="container">
      {/* <p>User: {eyuser}</p> */}
      <button className="outro" onClick={redirectToGoogleSSO}>
        outro
      </button>
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Hello!</h1>
        <label>Your Name: </label>
        {console.log('Your xx Name', authUser)}
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
        <GoogleButton />
      </form>
    </div>
  );
};
