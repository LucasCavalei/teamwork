import React, { useEffect } from 'react';

export function LoginError() {
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 1000);
  }, []);

  return <div>Erro ao logar! Por favor tente novamente</div>;
}
