import { createContext } from 'react';
import { Global } from '@emotion/react';
import reset from 'styles/reset';
import global from 'styles/global';
import Routes from 'routes/RoutesApp';
import NavBar from 'features/common/NavBar';
import theme from 'styles/theme';
import useTheme from 'hooks/useTheme';

const defaultValue = {
  dataTheme: localStorage.getItem('dataTheme'),
  onChangeDataTheme: () => {
    console.log('dataTheme');
  },
};

export const ThemeContext = createContext(defaultValue);

function App() {
  const { dataTheme, onChangeDataTheme } = useTheme();

  return (
    <div>
      <ThemeContext.Provider value={{ dataTheme, onChangeDataTheme }}>
        <NavBar />
        <Global styles={[reset, global, theme]} />
        <Routes />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
