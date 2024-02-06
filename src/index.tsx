import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'styles/fonts.css';
import { worker } from 'mocks/browsers';

worker.start().then(() => {
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
