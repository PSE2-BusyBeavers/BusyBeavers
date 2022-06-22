import { Avatar, Box, IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useUser } from '@src/hooks/useUser';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const { user, changeTheme, setUser } = useUser();
  const navigate = useNavigate();

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  function logout() {
    setUser(undefined);
    navigate('/login');
  }

  return (
    <Stack direction="row" alignItems="center">
      <Typography>Hallo, {user?.name}!</Typography>

      <Box sx={{ flexGrow: 0 }} m={2}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src={user?.avatar} />
        </IconButton>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem key="theme" onClick={() => changeTheme(user?.theme === 'dark' ? 'light' : 'dark')}>
            {user?.theme === 'light' ? <DarkMode fontSize="small" /> : <LightMode fontSize="small" />}
            <Typography>{user?.theme === 'dark' ? 'Light' : 'Dark'} Theme</Typography>
          </MenuItem>
          <MenuItem key="logout" onClick={logout}>
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
        </Menu>
      </Box>
    </Stack>
  );
};

export default User;
