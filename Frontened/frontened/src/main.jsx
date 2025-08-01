import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App.jsx';
import './index.css';
import { SnackbarProvider } from 'notistack';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SnackbarProvider maxSnack={3} 
  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  autoHideDuration={3000}>
        <App />
      </SnackbarProvider>
    </BrowserRouter>
  </StrictMode>
);

