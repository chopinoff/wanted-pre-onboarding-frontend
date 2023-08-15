import React, { useContext, useLayoutEffect, useState } from 'react';
import { css } from '@emotion/react';
import { FiSun, FiMoon } from 'react-icons/fi';
import Button from '../../Button';
import { ThemeContext } from 'App';

function ThemeIcons() {
  const { dataTheme, onChangeDataTheme } = useContext(ThemeContext);
  const [angle, setAngle] = useState(0);

  function handleClickTheme() {
    onChangeDataTheme();
    setAngle((prev) => prev - 90);
  }

  useLayoutEffect(() => {
    if (-90 <= angle && angle <= 0) {
      if (dataTheme === 'light') {
        setAngle(0);
      } else {
        setAngle(-90);
      }
    }
  }, [dataTheme]);

  return (
    <div css={iconsContainer(angle)} onClick={handleClickTheme}>
      <FiSun />
      <FiMoon />
      <FiMoon />
      <FiSun />
    </div>
  );
}

function ThemeButton() {
  return (
    <Button
      {...{
        width: '40px',
        height: '40px',
        padding: '0',
        hvBgColor: 'var(--bg2)',
        Icon: ThemeIcons,
      }}
    />
  );
}

const iconsContainer = (angle: number) => css`
  display: grid;
  width: 120px;
  height: 120px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    '. top .'
    'left . right'
    '. bottom .';
  transform: translateX(-40px) rotate(${angle}deg);
  transition: transform 0.8s;
  font-size: 20px;
  & svg {
    font-size: 1.2em;
    margin: auto auto;
  }
  & svg:nth-of-type(1) {
    grid-area: top;
  }
  & svg:nth-of-type(2) {
    grid-area: left;
    transform: rotate(-90deg);
  }
  & svg:nth-of-type(3) {
    grid-area: right;
    transform: rotate(90deg);
  }
  & svg:nth-of-type(4) {
    grid-area: bottom;
  }
`;

export default ThemeButton;
