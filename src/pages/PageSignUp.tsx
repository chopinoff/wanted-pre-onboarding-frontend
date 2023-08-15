import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUp from 'features/auth/SignUp';

function PageSignUp() {
  const navigate = useNavigate();
  const accessToken = window.localStorage.getItem('accessToken');

  useEffect(() => {
    accessToken && navigate('/todo');
  }, [accessToken]);

  return accessToken ? <></> : <SignUp />;
}

export default PageSignUp;
