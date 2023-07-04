import React, { useState } from 'react';
import './index.scss';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice';
import spinningCircle from '../assets/spinningCircle.json';
import Lottie from 'react-lottie';

export const ProviderProfile = () => {
  const dispatch = useDispatch();
  const { provider, authUser } = useSelector((state) => state.user);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [showLottie, setShowLottie] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: spinningCircle,
  };

  const handleLogout = () => {
    setShowLottie(true); //
    setTimeout(() => {
      dispatch(logout());
    }, 2200);
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
  const LottieComponent = () => {
    return (
      <div className="lottie-container">
        <Lottie options={defaultOptions} height={145} width={145} />
      </div>
    );
  };

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
              alt={provider.firstName}
            />
            <p style={{ margin: 0 }}>{provider.firstName}</p>
          </div>
          {isMouseOver && (
            <button className="buttonStyle" onClick={handleLogout}>
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
              <button className="buttonStyle" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        )
      )}
      {showLottie ? <LottieComponent /> : null}
    </div>
  );
};
