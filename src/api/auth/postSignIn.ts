// import axios from 'api/instance';
import { AuthPayload } from 'types/authTypes';

async function postSignIn({ email, password }: AuthPayload) {
  try {
    // const { data } = await axios().post('/auth/signin', {
    //   email,
    //   password,
    // });
    const data = await JSON.parse(localStorage.getItem('accounts') as string);
    if (data[email] !== password) {
      throw new Error();
    } else {
      window.localStorage.setItem('accessToken', 'accessToken');
    }
    return data;
  } catch {
    alert('이메일과 비밀번호를 다시 확인해주세요.');
    return null;
  }
}

export default postSignIn;
