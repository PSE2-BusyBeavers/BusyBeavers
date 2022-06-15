import { Box } from '@mui/material';
import TopBar from '@src/components/TopBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <TopBar />
      <Box display="flex" sx={{ flex: '1 1 auto' }}>
        <Outlet />
      </Box>
    </>
  );
}

export default App;
