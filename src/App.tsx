import { Global } from '@emotion/react';
import reset from 'styles/reset';
import global from 'styles/global';
import Routes from 'routes/RoutesApp';
import NavBar from 'features/common/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Global styles={[reset, global]} />
      <Routes />
    </div>
  );
}

export default App;
