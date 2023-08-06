import { useNavigate } from 'react-router-dom';
import EmailPasswordForm from '../components/EmailPasswordForm';
import postSignUp from '../api/auth/postSignUp';
import { authPayloadType } from '../types/authTypes';

function SignUp() {
  const navigate = useNavigate();

  async function handleSignUp({ email, password }: authPayloadType) {
    const data = await postSignUp({ email, password });
    data !== null && navigate('/signin');
  }

  return (
    <div>
      <EmailPasswordForm handleAuth={handleSignUp} />
    </div>
  );
}

export default SignUp;
