import React, { InputHTMLAttributes } from 'react';
import { css } from '@emotion/react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  side: number;
}

function CheckBox({ side, ...inputProps }: Props) {
  return <input {...{ inputProps }} css={checkBoxContainer({ side })} />;
}

const checkBoxContainer = ({ side }: Props) => css`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
  width: ${side}px;
  height: ${side}px;
  outline: 0;
  background-color: var(--bg2);
  position: relative;
  border-radius: ${side / 6}px;
  &::before {
    content: '';
    background-image: url('../../assets/images/checkbox-fill.png');
    background-size: 80% 80%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.3;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
  &::after {
    border: solid #fff;
    border-width: 0 2px 2px 0;
    content: '';
    display: none;
    height: 40%;
    left: 40%;
    position: relative;
    top: 20%;
    transform: rotate(45deg);
    width: 15%;
  }
  &:checked {
    background: var(--main);
    border: none;
  }
  &:checked::after {
    display: block;
  }
`;
export default CheckBox;
