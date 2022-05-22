import { AppBar,  Container, Toolbar} from '@mui/material';
import Logo from './Logo';
import Navigation from './Navigation';
import User from './User';

const TopBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <Navigation />
          <User />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TopBar