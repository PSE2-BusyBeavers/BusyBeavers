import { Box } from '@mui/material';
import TopBar from '@src/components/TopBar';
import { useUser } from '@src/hooks/useUser';
import { Navigate, Outlet } from 'react-router-dom';

function App() {
  const { user } = useUser();

  return user ? (
    <>
      <TopBar />
      <Box display="flex" sx={{ flex: '1 1 auto' }}>
        <Outlet />
      </Box>
    </>
  ) : (
    <Navigate to={'/login'} />
  );
}

export default App;
