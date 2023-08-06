import { useNavigate } from 'react-router-dom';
import EmailPasswordForm from '../components/EmailPasswordForm';
import postSignIn from '../api/auth/postSignIn';
import { authPayloadType } from '../types/authTypes';

function SignIn() {
  const navigate = useNavigate();

  async function handleSignIn({ email, password }: authPayloadType) {
    const signInRes = await postSignIn({ email, password });
    if (signInRes) navigate('/todo');
  }

  return (
    <div>
      <EmailPasswordForm handleAuth={handleSignIn} />
    </div>
  );
}

export default SignIn;
