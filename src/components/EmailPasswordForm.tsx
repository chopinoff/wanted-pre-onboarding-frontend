import { FormEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useInputValidation from '../hooks/useInputValidation';
import postSignUp from '../api/postSignUp';

type InputObjectType = {
  value: string;
  isValid: boolean;
  hasChanged: boolean;
};

function EmailPasswordForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const email = useInputValidation('', 'email');
  const password = useInputValidation('', 'password');

  function handleWarning(inputObject: InputObjectType) {
    if (inputObject.hasChanged && !inputObject.isValid) {
      return true;
    } else {
      return false;
    }
  }

  function handleDisabled() {
    if (email.isValid && password.isValid) {
      return false;
    } else {
      return true;
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    postSignUp({ email: email.value, password: password.value }).then(() => navigate('/'));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input data-testid="email-input" name="email" value={email.value} onChange={email.handleChange} />
        {handleWarning(email) && <p>유효하지 않은 이메일 주소입니다. 다시 확인해주세요.</p>}
        <input data-testid="password-input" name="password" value={password.value} onChange={password.handleChange} />
        {handleWarning(password) && <p>비밀번호를 8자리 이상 입력해주세요.</p>}
        {pathname === '/signup' ? (
          <button data-testid="signup-button" disabled={handleDisabled()}>
            회원가입
          </button>
        ) : (
          <button data-testid="signin-button" disabled={handleDisabled()}>
            로그인
          </button>
        )}
      </form>
    </div>
  );
}

export default EmailPasswordForm;
