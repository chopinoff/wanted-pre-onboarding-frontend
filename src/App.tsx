import { Global } from '@emotion/react';
import reset from 'styles/reset';
import global from 'styles/global';
import Routes from 'routes/RoutesApp';

function App() {
  return (
    <div>
      <Global styles={[reset, global]} />
      <Routes />
    </div>
  );
}

export default App;
