import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/auth/AuthForm';
import postSignIn from '../api/auth/postSignIn';
import { AuthPayload } from '../types/authTypes';

function SignIn() {
  const navigate = useNavigate();
  const accessToken = window.localStorage.getItem('accessToken');

  useEffect(() => {
    accessToken && navigate('/todo');
  }, [accessToken]);

  async function handleSignIn({ email, password }: AuthPayload) {
    const data = await postSignIn({ email, password });
    data !== null && navigate('/todo');
  }

  return <div>{!accessToken && <AuthForm handleAuth={handleSignIn} />}</div>;
}

export default SignIn;
