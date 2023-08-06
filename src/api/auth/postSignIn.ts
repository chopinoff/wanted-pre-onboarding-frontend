import defaultAxios from '../instance';
import { authPayloadType } from '../../types/authTypes';

async function postSignIn({ email, password }: authPayloadType) {
  try {
    const res = await defaultAxios.post('/auth/signin', {
      email,
      password,
    });
    window.localStorage.setItem('accessToken', res.data.access_token);
    return res.data;
  } catch (err) {
    alert('이메일과 비밀번호를 다시 확인해주세요.');
    return null;
  }
}

export default postSignIn;
