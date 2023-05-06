import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function Copyright() {
  return (
    <Typography variant="body2" color="GrayText" align="center">
      {'Copyright (C) '}
      <Link color="inherit" href="" target="_blank">
        MrBatata developments
      </Link>
      {' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default Copyright;
