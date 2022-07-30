import React from 'react';

import { createRoot } from 'react-dom/client';

import App from './App';

import './global.css';

const root = document.getElementById('root') as HTMLElement;
const RootElement = createRoot(root);

RootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
