import React, { useEffect } from 'react';
import hightFiveGif from '../../assets/loader.gif';

export function LoginSuccess() {
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 1000);
  }, []);

  return (
    <div>
      <img
        src={hightFiveGif}
        alt="GIF"
        style={{ width: '300px', height: '300px' }}
      />
    </div>
  );
}
