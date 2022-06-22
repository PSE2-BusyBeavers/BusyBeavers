import { Grid, Button, TextField, Container, Typography } from '@mui/material';
import logo from '@src/assets/Logo.png';
import { useUser, users } from '@src/hooks/useUser';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userValue, setUserValue] = useState('');

  const navigate = useNavigate();
  const { setUser } = useUser();

  function login() {
    if (userValue === 'knauber') {
      setUser(users[0]);
    } else if (userValue === 'porsche') {
      setUser(users[1]);
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
