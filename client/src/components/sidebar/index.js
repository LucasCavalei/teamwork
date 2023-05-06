import React from 'react';
import './index.scss';
import { ProviderProfile } from '../providerProfile';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice';

export const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <ProviderProfile />
      {/* <LogoutButton />  */}
    </div>
  );
};

// const LogoutButton = () => {
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     // Dispatch the logout action
//     dispatch(logout());
//     // dispatch(setIsAuthenticated(false))
//     // dispatch(setAuthUser(""));

//     // TODO: Call your logout API endpoint to invalidate the user's session
//   };

//   return <button onClick={handleLogout()}>Logout</button>;
// };
