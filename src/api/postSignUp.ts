import defaultAxios from './instance';

type postSignUpPayloadType = {
  email: string;
  password: string;
};

async function postSignUp({ email, password }: postSignUpPayloadType) {
  try {
    const res = await defaultAxios.post('/auth/signup', {
      email,
      password,
    });
    alert('회원가입이 완료되었습니다.');
    return res.data;
  } catch (err) {
    alert('회원가입이 정상적으로 완료되지 않았습니다. 다시 시도해주세요.');
    return null;
  }
}

export default postSignUp;
