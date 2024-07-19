// import axios from 'api/instance';
import { AuthPayload } from 'types/authTypes';

async function postSignUp({ email, password }: AuthPayload) {
  try {
    // const { data } = await axios().post('/auth/signup', {
    //   email,
    //   password,
    // });
    const data = await JSON.parse(localStorage.getItem('accounts') as string);
    if (data[email] !== undefined) {
      throw new Error();
    } else {
      data[email] = password;
      localStorage.setItem('accounts', JSON.stringify(data));
    }
    alert('회원가입이 완료되었습니다. 로그인 후 서비스를 이용하실 수 있습니다.');
    return data;
  } catch {
    alert('이미 존재하는 아이디입니다. 다른 아이디를 사용해주세요.');
    return null;
  }
}

export default postSignUp;
