import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@mui/material/Button';
import MenuListItems from '../../components/pure/MenuListItems';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Grid, Typography } from '@mui/material';
import { Item } from '../../styles/muiStyles';

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
    <ThemeProvider theme={'dark'}>
      <CssBaseline />

      <Box sx={{
        flexGrow: 1,
        p: 2,
        margin: 'auto',
        maxWidth: 500
      }}>
        {/* <Item></Item> */}
        <Grid container
          rowSpacing={4}
          columnSpacing={{ xs: 1, sm: 4, md: 10 }}
        >
          <Grid item xs={12}>
            <Item>
              <Typography variant="h3">DashBoard</Typography>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={4} >
              <Grid item xs={12}>
                <MenuListItems list={myList} />
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Button variant="contained" color="secondary" onClick={() => navigateTo('/login')}>Desconectarse</Button>
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default DashboardPage;
