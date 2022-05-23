import { AppBar,  Container, Paper, styled, Toolbar} from '@mui/material';
import Logo from './Logo';
import Navigation from './Navigation';
import User from './User';

const PaperBar = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  zIndex: 1100,
}));


const TopBar = () => {
  return (
    <AppBar position="static">
      <PaperBar square>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <Navigation />
          <User />
        </Toolbar>
        </Container>
        </PaperBar>
    </AppBar>
  );
}

export default TopBar