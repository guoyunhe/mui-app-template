import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '~/bootstrap/axios';
import '~/bootstrap/i18n';
import App from './App';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
