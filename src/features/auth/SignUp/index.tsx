import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from 'features/auth/AuthForm';
import postSignUp from 'api/auth/postSignUp';
import { AuthPayload } from 'types/authTypes';

function SignUp() {
  const navigate = useNavigate();

  async function handleSignUp({ email, password }: AuthPayload) {
    const data = await postSignUp({ email, password });
    data !== null && navigate('/signin');
  }

  return <AuthForm handleAuth={handleSignUp} />;
}

export default SignUp;
