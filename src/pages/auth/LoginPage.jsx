import React from 'react';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import LoginFormik from '../../components/pure/forms/LoginFormik';

function LoginPage() {
  const history = useHistory();

  // const navigateTo = (path) => {
  //     history.push(path)
  // }

  function navigateTo(path) {
    history.push(path);
  }

  return (
    <div>
      <h1>Login Page</h1>
      <LoginFormik />
      <button onClick={() => navigateTo('/')}>Home</button>

      <Button variant="contained" onClick={() => navigateTo('/register')}>Registrarse</Button>
    </div>
  );
}

export default LoginPage;
