import axios from '../instance';
import { AuthPayload } from '../../types/authTypes';

async function postSignUp({ email, password }: AuthPayload) {
  try {
    const { data } = await axios().post('/auth/signup', {
      email,
      password,
    });
    alert('회원가입이 완료되었습니다. 로그인 후 서비스를 이용하실 수 있습니다.');
    return data;
  } catch {
    alert('회원가입이 정상적으로 완료되지 않았습니다. 다시 시도해주세요.');
    return null;
  }
}

export default postSignUp;
