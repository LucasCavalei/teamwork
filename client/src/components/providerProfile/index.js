import React, { useState } from 'react';
import './index.scss';
import { useSelector, useDispatch } from 'react-redux';

export const ProviderProfile = () => {
  const dispatch = useDispatch();
  const { provider, authUser } = useSelector((state) => state.user);

  const { logout } = useSelector((state) => state.user);
  const [isMouseOver, setIsMouseOver] = useState(false);

  console.log('xxxxxxxxxxxxxxxx', authUser);
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
    // Call the logout action here
    dispatch(logout()); // Assuming `logout` is the action to be dispatched
  };
  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsMouseOver(false);
    }, 2000);
  };

  // //   if (!googleProvider) {
  // //     return null;
  // //   }

  return (
    <div>
      {provider ? (
        <div>
          <div
            className="providerProfile"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* <img
              className="provider-image"
              src={provider._json.picture}
              alt={provider._json.name}
            /> */}
            {/* <p style={{ margin: 0 }}>{provider._json.given_name}</p> */}
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
              {/* <img
                className="user-image"
                src={user.picture}
                alt={user.name}
              /> */}
              {/* <p style={{ margin: 0 }}>{authUser.name}</p> */}
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
