import React from 'react';
import { useForm } from 'react-hook-form';
import apiService from '../../services/apiService';
import GoogleButton from 'react-google-button';
import { useSelector, useDispatch } from 'react-redux';
import { setIsAuthenticated, setAuthUser } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import './index.scss';

export const Login = () => {
  const { register, handleSubmit } = useForm();

  //the user, esta dentro do configureStore authUser, Está no initialState
  const { authUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchAuthUser = async () => {
    try {
      const response = await apiService.fetchAuthUserBackend();
      console.log('Response from fetchAuthUser:', response);
      dispatch(setIsAuthenticated(true));
      dispatch(setAuthUser(response));
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
      dispatch(setAuthUser(null));
    }
  };

  const redirectToGoogleSSO = async () => {
    // in typescript
    // let timer: NodeJS.Timeout | null = null;

    let timer = null;
    const newWindow = window.open(
      apiService.loginWithGoogle(),
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
        <GoogleButton onClick={redirectToGoogleSSO} />
      </form>
    </div>
  );
};
