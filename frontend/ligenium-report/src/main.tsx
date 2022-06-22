import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { brandingDarkTheme, brandingLightTheme } from './themes/muiTheme';
import { Box } from '@mui/material';
import { Provider, loadClient } from './api/index';
import { UserProvider, useUser } from '@src/hooks/useUser';
import Router from '@src/router/Router';
import { HashRouter } from 'react-router-dom';
import 'virtual:windi.css';

const client = loadClient();

const Content = () => {
  const { user } = useUser();
  const theme = user?.theme === 'dark' ? brandingDarkTheme : brandingLightTheme;
  return (
    <MuiThemeProvider theme={theme}>
      <Box
        sx={{
          background: theme.palette.background.default,
          width: '100vw',
          height: '100vh',
          overflowY: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
        }}
      >
        <Router />
      </Box>
    </MuiThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider value={client}>
      <UserProvider>
        <HashRouter>
          <Content />
        </HashRouter>
      </UserProvider>
    </Provider>
  </React.StrictMode>,
);
