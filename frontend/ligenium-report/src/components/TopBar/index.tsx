import { AppBar, Paper, Stack, styled, Toolbar } from '@mui/material';
import Logo from './Logo';
import User from './User';

const PaperBar = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  zIndex: 1100,
}));

const TopBar = () => {
  return (
    <AppBar position="static">
      <PaperBar square>
        <Toolbar disableGutters>
          <Stack direction="row" justifyContent="space-between" alignContent="center" width="100%" pl={3} pr={3}>
            <Logo />
            <User />
          </Stack>
        </Toolbar>
      </PaperBar>
    </AppBar>
  );
};

export default TopBar;
