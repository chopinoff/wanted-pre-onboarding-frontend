import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiHome5Line, RiCheckFill, RiMenuLine } from 'react-icons/ri';
import { css } from '@emotion/react';
import Button from 'features/common/Button';
import MobileNavPopUp from './MobileNavPopUp';

function MobileNavBar() {
  const navigate = useNavigate();
  const [popUpOpen, setPopUpOpen] = useState(false);

  function handleClickHome() {
    setPopUpOpen(false);
    navigate('/');
  }

  function handleClickTodo() {
    setPopUpOpen(false);
    navigate('/todo');
  }

  function handleClickMenu() {
    setPopUpOpen(!popUpOpen);
  }

  return (
    <nav css={NavBarContainer}>
      <Button {...{ fontSize: '26px', Icon: RiHome5Line, handleClick: handleClickHome }} />
      <Button
        {...{
          fontSize: '26px',
          width: '40px',
          height: '40px',
          padding: '3px',
          color: '#ffffff',
          bgColor: 'var(--main)',
          Icon: RiCheckFill,
          handleClick: handleClickTodo,
        }}
      />
      <Button {...{ fontSize: '26px', Icon: RiMenuLine, handleClick: handleClickMenu }} />
      <MobileNavPopUp {...{ popUpOpen, handleClick: handleClickMenu }} />
    </nav>
  );
}

const NavBarContainer = () => css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 60px;
  background-color: var(--bg);
  box-shadow: 0px -5px 10px 0px var(--shadow);
  & * {
    margin: auto auto;
  }
`;

export default MobileNavBar;
