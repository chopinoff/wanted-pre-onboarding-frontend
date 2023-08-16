import React, { FormEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { css } from '@emotion/react';
import { RiErrorWarningLine } from 'react-icons/ri';
import useAuthValidation from '../../../hooks/useAuthValidation';
import { AuthPayload } from 'types/authTypes';
import { ReactComponent as Logo } from 'assets/images/logo-fin.svg';
import useResponsive, { IsResponsive } from 'hooks/useResponsive';
import Input from 'features/common/Input';
import Button from 'features/common/Button';

interface InputObjectType {
  value: string;
  isValid: boolean;
  hasChanged: boolean;
}

interface PropsType {
  handleAuth: ({ email, password }: AuthPayload) => Promise<void>;
}

function AuthForm({ handleAuth }: PropsType) {
  const location = useLocation();
  const pathname = location.pathname;
  const { isDeskTop, isMobile } = useResponsive();
  const email = useAuthValidation('', 'email');
  const password = useAuthValidation('', 'password');

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

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleAuth({ email: email.value, password: password.value });
  }

  return (
    <div css={formContainer({ isDeskTop })}>
      <h2 css={logoContainer({ isDeskTop })}>
        <Logo />
      </h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Input
          width="100%"
          height={isMobile ? '40px' : '50px'}
          bdColor={handleWarning(email) ? 'var(--alert)' : 'var(--bd)'}
          fcBdColor={handleWarning(email) ? 'var(--alert)' : 'var(--main)'}
          data-testid="email-input"
          aria-label="email-input"
          type="text"
          name="email"
          autoComplete="off"
          value={email.value}
          onChange={email.handleChange}
          placeholder="이메일을 입력해주세요"
        />
        {handleWarning(email) && (
          <p css={warningContainer}>
            <RiErrorWarningLine size={16} />
            유효하지 않은 이메일 형식입니다.
          </p>
        )}
        <Input
          width="100%"
          height={isMobile ? '40px' : '50px'}
          bdColor={handleWarning(password) ? 'var(--alert)' : 'var(--bd)'}
          fcBdColor={handleWarning(password) ? 'var(--alert)' : 'var(--main)'}
          data-testid="password-input"
          aria-label="password-input"
          autoComplete="off"
          type="password"
          name="password"
          value={password.value}
          placeholder="비밀번호를 입력해주세요"
          onChange={password.handleChange}
        />

        {handleWarning(password) && (
          <p css={warningContainer}>
            <RiErrorWarningLine size={16} />
            비밀번호를 8자리 이상 입력해주세요.
          </p>
        )}
        {pathname === '/signup' ? (
          <Button
            text="회원가입"
            fontSize="var(--fontSm)"
            width="100%"
            height={isMobile ? '40px' : '50px'}
            color="#fff"
            bgColor="var(--main)"
            center
            data-testid="signup-button"
            disabled={handleDisabled()}
          />
        ) : (
          <Button
            text="로그인"
            width="100%"
            height={isMobile ? '40px' : '50px'}
            color="#fff"
            bgColor="var(--main)"
            center
            data-testid="signin-button"
            disabled={handleDisabled()}
          />
        )}
      </form>
      <div css={linkContainer}>
        {pathname === '/signup' ? (
          <>
            <Link to="/signin">로그인</Link>
            <span>|</span>
            <Link to="/">홈으로</Link>
          </>
        ) : (
          <>
            <Link to="/signup">회원가입</Link>
            <span>|</span>
            <Link to="/">홈으로</Link>
          </>
        )}
      </div>
    </div>
  );
}

const formContainer = ({ isDeskTop }: IsResponsive) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(90vh - 200px);
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 40px auto;
  border-radius: 10px;
  padding: ${isDeskTop ? '60px 40px' : '50px 20px'};
  background-color: var(--bg);
  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  & input {
    font-size: var(--fontSm);
    margin: 5px auto;
  }
  & button {
    font-size: var(--fontSm);
    margin: 10px auto;
  }
`;

const logoContainer = ({ isDeskTop }: IsResponsive) => css`
  display: flex;
  align-items: center;
  height: 40px;
  max-width: ${isDeskTop ? '100px' : '70px'};
  margin: 0 0 30px;
  & svg {
    width: 100%;
    height: fit-content;
    fill: var(--main);
  }
`;

const warningContainer = () => css`
  width: 100%;
  padding: 2px 0 8px;
  font-size: 14px;
  display: flex;
  border-radius: 5px;
  color: var(--alert);
  & svg {
    margin-right: 4px;
  }
`;

const linkContainer = css`
  padding: 20px;
  & a:hover {
    color: var(--main);
    transition: all 0.3s;
  }
  & span {
    margin: 0 30px;
    color: var(--textOp);
  }
`;

export default AuthForm;
