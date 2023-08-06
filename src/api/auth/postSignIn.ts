import defaultAxios from '../instance';
import { authPayloadType } from '../../types/authTypes';

async function postSignIn({ email, password }: authPayloadType) {
  try {
    const res = await defaultAxios.post('/auth/signin', {
      email,
      password,
    });
    return res.data;
  } catch (err) {
    alert('로그인에 실패했습니다. 이메일과 비밀번호를 다시 확인해주세요.');
    return null;
  }
}

export default postSignIn;
