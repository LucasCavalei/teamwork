import React, { useState } from 'react';
import './index.scss';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice';

export const ProviderProfile = () => {
  const dispatch = useDispatch();
  const { provider, authUser } = useSelector((state) => state.user);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const buttonStyles = {
    backgroundColor: '#fca311',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    float: 'left',
    position: 'relative',
    left: '10px',
    top: '30px',
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsMouseOver(false);
    }, 2000);
  };

  if (!provider && !authUser) {
    return null;
  }

  return (
    <div>
      {provider ? (
        <div>
          <div
            className="providerProfile"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className="provider-image"
              src={provider.picture}
              alt={provider.given_name}
            />
            <p style={{ margin: 0 }}>{provider.given_name}</p>
          </div>
          {isMouseOver && (
            <button style={buttonStyles} onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      ) : (
        authUser && (
          <div>
            <div
              className="providerProfile"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <p style={{ margin: 0 }}>{authUser.user.name}</p>
            </div>
            {isMouseOver && (
              <button style={buttonStyles} onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        )
      )}
    </div>
  );
};
