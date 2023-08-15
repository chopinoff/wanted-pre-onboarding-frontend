import React, { ComponentType, MouseEventHandler, useState } from 'react';
import { css } from '@emotion/react';
import useResponsive, { IsResponsive } from 'hooks/useResponsive';

interface Props extends IsResponsive {
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
  round,
  squared,
  Icon,
  HvIcon,
  handleClick,
}: Props) {
  const { isDeskTop, isTablet } = useResponsive();
  const [hvState, setHvState] = useState(true);

  function handleMouseEnter() {
    setHvState(false);
  }

  function handleMouseLeave() {
    setHvState(true);
  }

  return (
    <button
      css={buttonContainer({
        isDeskTop,
        isTablet,
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
        round,
        squared,
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
  round,
  squared,
  Icon,
}: Props) => css`
  display: grid;
  overflow: hidden;
  align-items: center;
  grid-template-columns: auto 1fr;
  column-gap: ${!Icon ? '0' : colGap ? colGap : isDeskTop || isTablet ? '6px' : '4px'};
  width: ${width ? width : 'auto'};
  height: ${height ? height : '40px'};
  line-height: 0%;
  padding: ${padding ? '0 ' + padding : isDeskTop ? '0 16px' : isTablet ? '0 12px' : '0 10px'};
  font-size: ${fontSize ? fontSize : 'inherit'};
  font-weight: ${fontWeight ? fontWeight : 'regular'};
  text-align: left;
  border-radius: ${squared ? '0' : round ? '40px' : isDeskTop ? '10px' : '5px'};
  ${bdColor && `border: 1px solid ${bdColor};`}
  color: ${color ? color : 'var(--text)'};
  background-color: ${bgColor ? bgColor : '#00000000'};
  :hover {
    color: ${hvColor ? hvColor : color ? color : 'var(--text)'};
    background-color: ${hvBgColor ? hvBgColor : bgColor};
    ${hvBdColor && `border: 1px solid ${hvBdColor};`}
    transition: all 0.3s;
  }
  & svg {
    font-size: 1.2em;
  }
`;

export default Button;
