import axios from '../instance';
import { AuthPayload } from '../../types/authTypes';

async function postSignIn({ email, password }: AuthPayload) {
  try {
    const { data } = await axios.post('/auth/signin', {
      email,
      password,
    });
    window.localStorage.setItem('accessToken', data.access_token);
    return data;
  } catch {
    alert('이메일과 비밀번호를 다시 확인해주세요.');
    return null;
  }
}

export default postSignIn;
