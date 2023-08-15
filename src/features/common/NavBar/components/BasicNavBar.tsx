import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import useResponsive, { IsResponsive } from 'hooks/useResponsive';
import { RiCheckboxCircleFill, RiCheckboxCircleLine } from 'react-icons/ri';
import Button from 'features/common/Button';
import ThemeButton from './ThemeButton';
import { ReactComponent as Logo } from 'assets/images/logo.svg';

function BasicNavBar() {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState<string | null>(window.localStorage.getItem('accessToken'));
  const { isDeskTop } = useResponsive();

  function handleClickLogout() {
    window.localStorage.removeItem('accessToken');
    navigate('/');
  }

  function handleClickLogin() {
    navigate('/signin');
  }

  function handleClickTodo() {
    navigate('/todo');
  }

  useEffect(() => {
    setAccessToken(window.localStorage.getItem('accessToken'));
  }, [navigate]);

  return (
    <nav css={navContainer({ isDeskTop })}>
      <h1 css={logoContainer({ isDeskTop })}>
        <Link to="/">
          <Logo />
        </Link>
      </h1>
      <div css={navButtonContainer({ isDeskTop })}>
        <ThemeButton />
        <Button
          {...{
            text: accessToken ? 'Logout' : 'Login',
            fontSize: 'var(--fontSm)',
            height: '40px',
            hvBgColor: 'var(--bg2)',
            handleClick: accessToken ? handleClickLogout : handleClickLogin,
          }}
        />
        <Button
          {...{
            text: 'To Do',
            hvColor: '#090a0d',
            hvBgColor: 'var(--main)',
            Icon: RiCheckboxCircleFill,
            HvIcon: RiCheckboxCircleLine,
            handleClick: handleClickTodo,
          }}
        />
      </div>
    </nav>
  );
}

const navContainer = ({ isDeskTop }: IsResponsive) => css`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr auto;
  max-width: 1200px;
  height: 80px;
  margin: 0 auto;
  padding: ${isDeskTop ? '20px 40px' : '10px 20px'};
`;

const logoContainer = ({ isDeskTop }: IsResponsive) => css`
  display: flex;
  align-items: center;
  height: 40px;
  max-width: ${isDeskTop ? '220px' : '140px'};
  margin: auto 0;
  & svg {
    width: 100%;
    height: fit-content;
    fill: var(--text);
  }
`;

const navButtonContainer = ({ isDeskTop }: IsResponsive) => css`
  display: grid;
  grid-template-columns: 40px auto auto;
  column-gap: ${isDeskTop ? '10px' : '5px'};
  justify-content: space-between;
  & * {
    margin: auto 0;
    text-align: center;
  }
`;

export default BasicNavBar;
