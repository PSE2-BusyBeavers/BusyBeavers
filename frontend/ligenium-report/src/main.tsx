import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import './index.css'
import { ThemeProvider as MuiThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { brandingDarkTheme, brandingLightTheme } from './themes/muitheme';
import { Box } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MuiThemeProvider theme={brandingDarkTheme}>
      <Box  sx={{ background: brandingDarkTheme.palette.background.default, width: "100vw", height: "100vh" }}>
        <App />
      </Box>
    </MuiThemeProvider>
  </React.StrictMode>
)
