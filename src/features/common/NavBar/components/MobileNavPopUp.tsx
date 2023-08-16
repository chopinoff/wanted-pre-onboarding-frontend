import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import { RiLoginCircleLine, RiLogoutCircleLine } from 'react-icons/ri';
import { FiSun, FiMoon } from 'react-icons/fi';
import Button from 'features/common/Button';
import { ThemeContext } from 'App';

interface Props {
  popUpOpen: boolean;
  handleClick: () => void;
}

function MobileNavPopUp({ popUpOpen, handleClick }: Props) {
  const accessToken = window.localStorage.getItem('accessToken');
  const navigate = useNavigate();
  const { dataTheme, onChangeDataTheme } = useContext(ThemeContext);

  function handleClickLogout() {
    handleClick();
    window.localStorage.removeItem('accessToken');
    navigate('/');
  }
  function handleClickLogin() {
    handleClick();
    navigate('/signin');
  }

  function handleClickTheme() {
    onChangeDataTheme();
  }

  return (
    <div css={popUpContainer(popUpOpen)}>
      <Button
        {...{
          text: accessToken ? 'Logout' : 'Login',
          fontSize: '20px',
          width: '100%',
          height: '60px',
          padding: '20px',
          colGap: '20px',
          hvBgColor: 'var(--bg2)',
          Icon: accessToken ? RiLogoutCircleLine : RiLoginCircleLine,
          handleClick: accessToken ? handleClickLogout : handleClickLogin,
        }}
        squared
      />
      <Button
        {...{
          text: `${dataTheme.charAt(0).toUpperCase() + dataTheme.slice(1)} Mode`,
          fontSize: '20px',
          width: '100%',
          height: '60px',
          padding: '20px',
          colGap: '20px',
          hvBgColor: 'var(--bg2)',
          Icon: dataTheme === 'light' ? FiSun : FiMoon,
          handleClick: handleClickTheme,
        }}
        squared
      />
    </div>
  );
}

const popUpContainer = (popUpOpen: boolean) => css`
  position: absolute;
  z-index: -10;
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  height: 120px;
  bottom: ${popUpOpen ? '60px' : '-60px'};
  transition: all 0.5s;
  background-color: var(--bgColor);
`;

export default MobileNavPopUp;
