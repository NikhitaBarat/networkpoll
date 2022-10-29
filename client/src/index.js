import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { SlashAuthProvider } from '@slashauth/slashauth-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SlashAuthProvider
        clientID="a6byrqkdodoyas0u"
      >
        <App />
      </SlashAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
