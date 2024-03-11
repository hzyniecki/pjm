import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007d99',
    },
    secondary: {
      main: '#696e71',
    },
  },
  typography: {
    fontFamily: 'Work Sans, sans-serif',
    h1: {
      fontSize: '103px',
    },
    h2: {
      fontSize: '64px',
    },
    h3: {
      fontSize: '51px',
    },
    h4: {
      fontSize: '36px',
    },
    h5: {
      fontSize: '26px',
    },
    h6: {
      fontSize: '21px',
    },
    subtitle1: {
      fontSize: '17px',
    },
    subtitle2: {
      fontSize: '15px',
    },
    button: {
      fontSize: '15px',
    },
    overline: {
      fontSize: '11px',
    },
    caption: {
      fontSize: '13px',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
