import { css } from '@emotion/react';
import React, { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  height?: string;
  bgColor?: string;
  bdColor?: string;
  fcBdColor?: string;
}

function Input({ width, height, bgColor, bdColor, fcBdColor, ...inputProps }: Props) {
  return <input {...inputProps} css={inputContainer({ width, height, bgColor, bdColor, fcBdColor })} />;
}

const inputContainer = ({ width, height, bgColor, bdColor, fcBdColor }: Props) => css`
  width: ${width ? width : 'auto'};
  height: ${height ? height : '50px'};
  padding: 0 10px;
  ${bdColor && `border : 1px solid ${bdColor};`}
  border-radius: 5px;
  background-color: ${bgColor ? bgColor : 'var(--bg)'};
  font-size: var(--fontMd);
  & * {
    font-size: 2em;
  }
  &:focus {
    ${fcBdColor && `border : 1px solid ${fcBdColor};`}
    background-color: ${bgColor ? bgColor : 'var(--bg)'};
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: #000;
    -webkit-box-shadow: 0 0 0px 1000px ${bgColor ? bgColor : 'var(--bg)'} inset;
    box-shadow: 0 0 0px 1000px ${bgColor ? bgColor : 'var(--bg)'} inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  &:-webkit-autofill::first-line {
  }
`;

export default Input;
