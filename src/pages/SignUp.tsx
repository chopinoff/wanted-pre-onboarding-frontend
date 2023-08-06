import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmailPasswordForm from '../components/EmailPasswordForm';
import postSignUp from '../api/auth/postSignUp';
import { AuthPayload } from '../types/authTypes';

function SignUp() {
  const navigate = useNavigate();
  const accessToken = window.localStorage.getItem('accessToken');

  useEffect(() => {
    accessToken && navigate('/todo');
  }, [accessToken]);

  async function handleSignUp({ email, password }: AuthPayload) {
    const data = await postSignUp({ email, password });
    data !== null && navigate('/signin');
  }

  return <div>{!accessToken && <EmailPasswordForm handleAuth={handleSignUp} />}</div>;
}

export default SignUp;
