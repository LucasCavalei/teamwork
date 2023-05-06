import React from 'react';
import './index.scss';
import { useSelector } from 'react-redux';

export const ProviderProfile = () => {
  const { authUser: provider } = useSelector((state) => state.user);

  if (!provider) {
    return null;
  }

  {
    console.log(provider._json);
  }
  return (
    <div className="providerProfile">
      <img
        className="provider-image"
        src={provider._json.picture}
        alt={provider._json.name}
      />
      <p style={{ margin: 0 }}>{provider._json.given_name}</p>
    </div>
  );
};
