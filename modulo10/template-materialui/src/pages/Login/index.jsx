import React, { useState } from 'react';
import { Grid, FormControl, Input, FormHelperText, Button } from '@mui/material';

const Login = () => {
  const [login, setLogin] = useState('');

  const handleSubmit = () => {
    if (login.trim() === '') {
      alert('Por favor, insira um login.');
    } else {
      alert(`Login realizado com sucesso: ${login}`);
    }
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <FormControl fullWidth>
          <Input
            id="login_nome"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <FormHelperText>Digite seu login.</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Entrar
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;