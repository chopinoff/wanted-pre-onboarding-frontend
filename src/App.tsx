import React, { createContext } from 'react';
import { Global, css } from '@emotion/react';
import reset from 'styles/reset';
import global from 'styles/global';
import Routes from 'routes/RoutesApp';
import NavBar from 'features/common/NavBar';
import theme from 'styles/theme';
import useTheme from 'hooks/useTheme';
import useResponsive, { IsResponsive } from 'hooks/useResponsive';

const defaultValue = {
  dataTheme: 'light',
  onChangeDataTheme: () => {
    console.log('dataTheme');
  },
};

export const ThemeContext = createContext(defaultValue);

function App() {
  const { isDeskTop, isTablet } = useResponsive();
  const { dataTheme, onChangeDataTheme } = useTheme();

  return (
    <div>
      <ThemeContext.Provider value={{ dataTheme, onChangeDataTheme }}>
        <NavBar />
        <Global styles={[reset, global, theme]} />
        <div css={routeContainer({ isDeskTop, isTablet })}>
          <Routes />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

const routeContainer = ({ isDeskTop, isTablet }: IsResponsive) => css`
  padding: ${isDeskTop ? '80px 40px' : isTablet ? '80px 20px' : '20px'};
  margin: 0 auto;
  max-width: 1200px;
`;

export default App;
