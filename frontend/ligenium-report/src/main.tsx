import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import './index.css'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { brandingDarkTheme, brandingLightTheme } from './themes/muiTheme';
import { Box } from '@mui/material';
import { Provider, loadClient } from './api/index';
import { AuthProvider } from './hooks/Auth';

const client = loadClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider value={client}>
      <AuthProvider>
        <MuiThemeProvider theme={brandingDarkTheme}>
          <Box sx={{ background: brandingDarkTheme.palette.background.default, width: "100vw", height: "100vh", overflow: "hidden" }}>
            <App />
          </Box>
        </MuiThemeProvider>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
)
