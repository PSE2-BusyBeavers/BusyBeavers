import { Avatar, Stack, Typography } from '@mui/material';
import logo from '@src/assets/Logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Stack direction="row" alignItems="center" sx={{ mr: 10 }}>
      <Link to="/" className="flex items-center gap-4">
        <Avatar variant="square" sx={{ background: 'transparent' }}>
          <img src={logo} width="90%" />
        </Avatar>
        <Typography>Ligenium Praedictius</Typography>
      </Link>
    </Stack>
  );
};

export default Logo;
