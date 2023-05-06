import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CustomButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

function HomePage() {
  const location = useLocation();
  console.log(`We are in Route ${location.pathname}`);

  const history = useHistory();

  const navigateTo = (path) => {
    history.push(path);
  };

  const navigateProps = (path) => {
    history.push({
      pathname: path,
      search: '?online=true', // Query Params
      state: {
        online: true,
      },
    });
  };

  // const goBack = () => {
  //     history.goBack()
  // }

  // const goForward = () => {
  //     history.goForward()
  // }

  const handleLogin = async () => {
    await setTimeout(() => {
      navigateTo('/login');
    }, 250);
  }

  const handleOnlineState = async () => {
    await setTimeout(() => {
      navigateProps('/online-state');
    }, 250);
  }

  return (
    <Box sx={{
      flexGrow: 1,
      p: 2,
      margin: 'auto',
      maxWidth: 500
    }}>
      <Grid container
        rowSpacing={4}
        columnSpacing={{ xs: 1, sm: 4, md: 10 }}>
        <Grid item xs={12}>
          <Item><Typography variant="h3">Home Page</Typography></Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <CustomButton variant="contained" onClick={handleLogin}>Ingresar</CustomButton>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <CustomButton variant="contained" onClick={handleOnlineState}>Ir a State</CustomButton>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <span>
              {'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).'}
            </span>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomePage;
