import { useNavigate } from 'react-router-dom';
import AuthForm from 'features/auth/AuthForm';
import postSignIn from 'api/auth/postSignIn';
import { AuthPayload } from 'types/authTypes';

function SignIn() {
  const navigate = useNavigate();

  async function handleSignIn({ email, password }: AuthPayload) {
    const data = await postSignIn({ email, password });
    data !== null && navigate('/todo');
  }

  return <AuthForm handleAuth={handleSignIn} />;
}

export default SignIn;
