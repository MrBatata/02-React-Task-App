import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center'
}));

export const Imagen = styled('img')({
  maxWidth: '100%',
  maxHeight: '100%',
});