import React from 'react';
import { css } from '@emotion/react';
import MobileNavBar from './components/MobileNavBar';
import BasicNavBar from './components/BasicNavBar';
import useResponsive, { IsResponsive } from 'hooks/useResponsive';

function NavBar() {
  const { isMobile } = useResponsive();
  return <header css={headerContainer({ isMobile })}>{isMobile ? <MobileNavBar /> : <BasicNavBar />}</header>;
}

const headerContainer = ({ isMobile }: IsResponsive) => css`
  position: fixed;
  z-index: 20;
  background-color: var(--bg);
  ${isMobile ? 'bottom : 0;' : 'top : 0;'}
  width: 100%;
  box-shadow: ${isMobile ? '0px -5px 10px 0px var(--shadow)' : '0px 5px 10px 0px var(--shadow)'};
`;

export default NavBar;
