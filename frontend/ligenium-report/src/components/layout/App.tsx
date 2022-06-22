import { Box } from '@mui/material';
import TopBar from '@src/components/TopBar';
import { useUser } from '@src/hooks/useUser';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  });

  return user ? (
    <>
      <TopBar />
      <Box display="flex" sx={{ flex: '1 1 auto' }}>
        <Outlet />
      </Box>
    </>
  ) : (
    <></>
  );
}

export default App;
