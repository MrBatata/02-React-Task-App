import React from 'react';
import { useHistory } from 'react-router-dom';
import { Home, Settings } from '@mui/icons-material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


function getIcon(icon) {
  switch (icon) {
    case 'HOME':
      return (<Home />);
    case 'TASKS':
      return (<AssignmentIcon />);
    case 'SETTINGS':
      return (<Settings />);
    default:
      return (<Home />);
  }
}

/**
 * * Main Menú - Functional component w/ MUI Materials & Icons
 */
function MenuListItems({ list }) {
  const history = useHistory();
  const navigateTo = (path) => {
    history.push(path);
  };

  /**
   * * DOM print
   */
  return (
    <ThemeProvider theme={'dark'}>
      <CssBaseline />
      <Box sx={{
        flexGrow: 1,
        p: 2,
        margin: 'auto',
        maxWidth: 500,
      }}>
        <List
          component="nav"
          aria-label="main mailbox folders"
          sx={{}}
        >
          {list.map(({ text, path, icon }, index) => (
            <ListItemButton
              key={index}
              selected
              onClick={() => {
                navigateTo(path);
              }}
            >
              <ListItemIcon>
                {getIcon(icon)}
              </ListItemIcon>

              <ListItemText
                primary={text}
              />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </ThemeProvider>
  );
}

export default MenuListItems;
