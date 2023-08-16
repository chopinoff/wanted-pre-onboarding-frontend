import React, { ComponentType, ButtonHTMLAttributes, MouseEventHandler, useState } from 'react';
import { css } from '@emotion/react';
import useResponsive, { IsResponsive } from 'hooks/useResponsive';

interface Props extends IsResponsive, ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  hvText?: string;
  fontSize?: string;
  fontWeight?: string;
  width?: string;
  height?: string;
  padding?: string;
  colGap?: string;
  color?: string;
  hvColor?: string;
  bgColor?: string;
  hvBgColor?: string;
  bdColor?: string;
  hvBdColor?: string;
  center?: boolean;
  round?: boolean;
  squared?: boolean;
  Icon?: ComponentType;
  HvIcon?: ComponentType;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

function Button({
  text,
  hvText,
  fontSize,
  fontWeight,
  width,
  height,
  padding,
  colGap,
  color,
  hvColor,
  bgColor,
  bdColor,
  hvBgColor,
  hvBdColor,
  center,
  round,
  squared,
  Icon,
  HvIcon,
  handleClick,
  ...buttonProps
}: Props) {
  const { isDeskTop, isTablet } = useResponsive();
  const [hvState, setHvState] = useState(true);
  const disabled = buttonProps.disabled;

  function handleMouseEnter() {
    setHvState(false);
  }

  function handleMouseLeave() {
    setHvState(true);
  }

  return (
    <button
      {...buttonProps}
      css={buttonContainer({
        isDeskTop,
        isTablet,
        text,
        fontSize,
        fontWeight,
        width,
        height,
        padding,
        colGap,
        color,
        hvColor,
        bgColor,
        hvBgColor,
        bdColor,
        hvBdColor,
        center,
        round,
        squared,
        disabled,
        Icon,
      })}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {hvState ? (
        <>
          {Icon && <Icon />}
          {text}
        </>
      ) : (
        <>
          {HvIcon ? <HvIcon /> : Icon && <Icon />}
          {hvText ? hvText : text}
        </>
      )}
    </button>
  );
}

const buttonContainer = ({
  isDeskTop,
  isTablet,
  text,
  fontSize,
  fontWeight,
  width,
  height,
  padding,
  colGap,
  color,
  hvColor,
  bgColor,
  bdColor,
  hvBgColor,
  hvBdColor,
  center,
  round,
  squared,
  Icon,
  disabled,
}: Props) => css`
  display: grid;
  overflow: hidden;
  align-items: center;
  grid-template-columns: ${Icon && text ? 'auto 1fr' : '1fr'};
  column-gap: ${!Icon ? '0' : colGap ? colGap : isDeskTop || isTablet ? '6px' : '4px'};
  width: ${width ? width : 'auto'};
  height: ${height ? height : '40px'};
  line-height: 0%;
  padding: ${padding ? '0 ' + padding : isDeskTop ? '0 16px' : isTablet ? '0 12px' : '0 10px'};
  font-size: ${fontSize ? fontSize : 'inherit'};
  font-weight: ${fontWeight ? fontWeight : 'regular'};
  text-align: ${center ? 'center' : 'left'};
  border-radius: ${squared ? '0' : round ? '40px' : '5px'};
  ${bdColor && `border: 1px solid ${bdColor};`}
  color: ${disabled ? 'var(--textOp)' : color ? color : 'var(--text)'};
  background-color: ${disabled ? 'var(--bg3)' : bgColor ? bgColor : '#00000000'};
  :hover {
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    color: ${disabled ? 'var(--textOp)' : hvColor ? hvColor : color ? color : 'var(--text)'};
    background-color: ${disabled ? 'var(--bg3)' : hvBgColor ? hvBgColor : bgColor};
    ${hvBdColor && `border: 1px solid ${hvBdColor};`}
    transition: all 0.3s;
  }
  & svg {
    font-size: 1.2em;
  }
`;

export default Button;
