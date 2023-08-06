import defaultAxios from '../instance';
import { authPayloadType } from '../../types/authTypes';

async function postSignUp({ email, password }: authPayloadType) {
  try {
    const res = await defaultAxios.post('/auth/signup', {
      email,
      password,
    });
    alert('회원가입이 완료되었습니다.');
    return res;
  } catch (err) {
    alert('회원가입이 정상적으로 완료되지 않았습니다. 다시 시도해주세요.');
    return null;
  }
}

export default postSignUp;
