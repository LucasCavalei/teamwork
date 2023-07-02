import React from 'react';
import { useForm } from 'react-hook-form';
import apiService from '../../services/apiService';
import GoogleButton from 'react-google-button';
import { useSelector, useDispatch } from 'react-redux';
import {
  setIsAuthenticated,
  setAuthUser,
  setProvider,
} from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import './index.scss';

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const AuthUserGoogleHandler = async () => {
    try {
      const response = await apiService.fetchAuthUser();
      dispatch(setIsAuthenticated(true));
      dispatch(setProvider(response));
      navigate('/');

      // Check if the response data is valid before dispatching actions and navigating
      if (
        response &&
        response.data &&
        Object.keys(response.data).length !== 0
      ) {
      } else {
        // If the response data is invalid, show an error message or redirect to the login page
        console.log('Error: invalid response data');
        // Add your own code here to handle the error
      }
    } catch (err) {
      console.log('Error fetching authenticated user', err);
      dispatch(setIsAuthenticated(false));
      dispatch(setProvider(null));
    }
  };

  const redirectToGoogleSSO = async () => {
    // in typescript set
    // let timer: NodeJS.Timeout | null = null;
    let timer = null;
    const width = 500;
    const height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;
    const newWindow = window.open(
      apiService.loginWithGoogle(),
      '_blank',
      `width=${width},height=${height},top=${top},left=${left}`
    );

    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          console.log("Yay we're authenticated");
          AuthUserGoogleHandler();
          if (timer) clearInterval(timer);
        }
      }, 500);
    }
  };

  const createUserHandle = async (userData) => {
    const response = await apiService.createUser(userData);
    dispatch(setAuthUser(response));
    dispatch(setIsAuthenticated(true));
  };

  const onSubmit = (e) => {
    const userData = {
      name: e.name,
      email: e.email,
      password: e.password,
    };
    createUserHandle(userData);
  };

  return (
    <div className="container">
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Wellcome!</h1>
        <label>Your Name </label>
        <input type="text" {...register('name')} placeholder="Enter you name" />
        <label> Email </label>
        <input
          type="text"
          {...register('email')}
          placeholder="Your email adress here"
        />
        <label> Password </label>
        <input type="password" {...register('password')} />
        <label> Confirm password</label>
        <input type="password" {...register('password')} />
        <button className="button button1" type="submit">
          Continue
        </button>
        <GoogleButton onClick={redirectToGoogleSSO} />
      </form>
    </div>
  );
};
