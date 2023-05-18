import React, { useState } from 'react';
import './index.scss';
import { useSelector } from 'react-redux';

export const ProviderProfile = () => {
  const { authUser: provider } = useSelector((state) => state.user);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  if (!provider) {
    return null;
  }

  {
    console.log(provider._json);
  }
  return (
    <div>
      <div
        className="providerProfile"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className="provider-image"
          src={provider._json.picture}
          alt={provider._json.name}
        />
        <p style={{ margin: 0 }}>{provider._json.given_name}</p>
      </div>
      {isMouseOver ? <button>Logout</button> : ''}
    </div>
  );
};
