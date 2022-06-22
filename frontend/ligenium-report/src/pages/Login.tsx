import { Grid, Button, TextField, Container, Typography } from '@mui/material';
import logo from '@src/assets/Logo.png';
import { useUser } from '@src/hooks/useUser';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userValue, setUserValue] = useState('');

  const navigate = useNavigate();
  const { setUser } = useUser();

  function login() {
    if (userValue === 'knauber') {
      setUser({
        name: 'Peter Knauber',
        id: '1',
        theme: 'light',
        role: 'service',
        avatar:
          'https://www.informatik.hs-mannheim.de/fileadmin/user_upload/fakultaeten/fakultaet_i/neue_webseite/Professoren_und_Mitarbeiter/peter-knauber-300px.jpg',
      });
    } else if (userValue === 'porsche') {
      setUser({
        name: 'Ferdinand Porsche',
        id: '2',
        theme: 'dark',
        role: 'customer',
        avatar:
          'https://upload.wikimedia.org/wikipedia/commons/f/fb/Bundesarchiv_Bild_183-2005-1017-525%2C_Dr._Ferdinand_Porsche.jpg',
      });
    } else {
      alert('Benutzername oder Passwort falsch');
      return;
    }
    navigate('/');
  }

  return (
    <Container sx={{ height: '100%', display: 'flex' }}>
      <Grid container sx={{ margin: 'auto', gap: '1rem', maxWidth: 'calc(100%/3)' }}>
        <div className="mx-auto">
          <img src={logo} width="90%" />
        </div>
        <Typography className="w-full !text-4xl text-center !mb-8">Ligenium Praedictius</Typography>
        <TextField
          fullWidth
          label="Benutzername"
          variant="outlined"
          autoComplete="nope"
          value={userValue}
          onChange={(event) => setUserValue(event.target.value)}
        />
        <TextField fullWidth label="Passwort" type="password" variant="outlined" autoComplete="nope" />
        <Button color="primary" fullWidth variant="contained" onClick={login}>
          Anmelden
        </Button>
      </Grid>
    </Container>
  );
};

export default Login;
