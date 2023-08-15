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
  ${isMobile ? 'bottom : 0;' : 'top : 0;'}
  width: 100%;
`;

export default NavBar;
