import React from 'react';
import { css, keyframes } from '@emotion/react';
import { ReactComponent as Logo } from 'assets/images/logo-fin.svg';
import Button from 'features/common/Button';
import { useNavigate } from 'react-router-dom';
import useResponsive from 'hooks/useResponsive';

function PageHome() {
  const accessToken = window.localStorage.getItem('accessToken');
  const { isMobile } = useResponsive();
  const navigate = useNavigate();

  function handleClickLogin() {
    navigate('/signin');
  }

  function handleClickTodo() {
    navigate('/todo');
  }

  return (
    <div css={homeContainer(isMobile)}>
      <Logo />
      <div>Wanted To Do</div>
      <Button
        width={isMobile ? '100%' : '300px'}
        text={accessToken ? 'To Do  작성하기' : '로그인 하기'}
        fontSize="var(--fontMd)"
        height={isMobile ? '40px' : '50px'}
        colGap="0"
        padding="30px"
        color="#fff"
        hvColor="var(--main)"
        bgColor="var(--main)"
        hvBgColor="var(--mainOp2)"
        center
        round
        bdColor="var(--main)"
        handleClick={accessToken ? handleClickTodo : handleClickLogin}
      />
    </div>
  );
}
const upMotion = () => keyframes`
  0% {
    opacity: 0;
    transform: translateY(0px);
  }
  100% {
    opacity: 1;
    transform: translateY(20px);
  }
`;

const moveMotion = keyframes`
0%{
  transform: translateY(0px);
}
100%{
  transform: translateY(-40px);
}`;

const appearMotion = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const homeContainer = (isMobile?: boolean) => css`
  position: relative;
  height: calc(100vh - 160px);
  animation: ${moveMotion} 1s 1.5s;
  animation-fill-mode: forwards;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & svg {
    width: ${isMobile ? '140px' : '260px'};
    fill: var(--main);
    object-fit: contain;
    margin-bottom: ${isMobile ? '4px' : '26px'};
    animation-name: ${upMotion()};
    animation-fill-mode: forwards;
    animation-duration: 1s;
  }
  & div {
    font-size: ${isMobile ? 'var(--fontMd)' : 'var(--fontLg)'};
    width: ${isMobile ? '140px' : '260px'};
    text-align: center;
    letter-spacing: 3px;
    margin-bottom: 10px;
    animation: ${upMotion()} 1s 0.5s;
    opacity: 0;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
  & button {
    animation: ${appearMotion} 0.5s 2.3s;
    animation-fill-mode: forwards;
    opacity: 0;
    margin-top: 40px;
  }
`;

export default PageHome;
