import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography
} from '@mui/material'
import { DarkMode, LightMode } from '@mui/icons-material'
import { useAuthUser } from '@src/hooks/Auth'
import { useState } from 'react'

const settings = ['Settings', 'Account', 'Logout']

const User = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
  const user = useAuthUser()

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  return (
    <Stack direction='row' alignItems='center'>
      <Typography>Hallo, {user.name}!</Typography>

      <Box sx={{ flexGrow: 0 }} m={2}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt='Remy Sharp' src={user.avatar} />
        </IconButton>
        <Menu
          sx={{ mt: '45px' }}
          id='menu-appbar'
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem key='theme' onClick={user.changeTheme}>
            {user.theme === 'light' ? (
              <DarkMode fontSize='small' />
            ) : (
              <LightMode fontSize='small' />
            )}
            <Typography>
              {user.theme === 'light' ? 'Dark' : 'Light'} Theme
            </Typography>
          </MenuItem>
          {settings.map(setting => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign='center'>{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Stack>
  )
}

export default User
