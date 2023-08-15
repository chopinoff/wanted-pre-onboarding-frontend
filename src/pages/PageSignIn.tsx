import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignIn from 'features/auth/SignIn';

function PageSignIn() {
  const navigate = useNavigate();
  const accessToken = window.localStorage.getItem('accessToken');

  useEffect(() => {
    accessToken && navigate('/todo');
  }, [accessToken]);

  return accessToken ? <></> : <SignIn />;
}

export default PageSignIn;
