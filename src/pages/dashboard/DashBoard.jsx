import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@mui/material/Button';
import Copyright from '../../components/pure/Copyright';
import MenuListItems from '../../components/pure/MenuListItems';

function DashboardPage() {
  const history = useHistory();

  const navigateTo = (path) => {
    history.push(path);
  };

  const myList = [
    { text: 'Perfil', path: '/profile', icon: 'HOME' },
    { text: 'Tareas', path: '/tasks', icon: 'TASKS' },
    { text: 'Configuración', path: '/settings', icon: 'SETTINGS' },
  ];

  return (
    <div>
      <h1>DashBoard</h1>
      <MenuListItems list={myList} />
      <Button variant="contained" onClick={() => navigateTo('/login')}>Desconectarse</Button>
      <Copyright />
    </div>
  );
}

export default DashboardPage;
