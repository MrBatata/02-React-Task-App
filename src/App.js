import React, { useState, useContext, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

/*
 * * Pages
 */
import NotFoundPage from './pages/404/NotFoundPage';
import HomePage from './pages/home/HomePage';
import RegisterPage from './pages/auth/RegisterPage';
import LoginPage from './pages/auth/LoginPage';
import DashboardPage from './pages/dashboard/DashBoard';
import TaskPage from './pages/tasks/TasksPage';
import SettingsPage from './pages/settings/SettingsPage';
import ProfilePage from './pages/profile/ProfilePage';

/**
 * * MUI
 */
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

/**
 * * Color mode
 */
const ColorModeContext = createContext({ toggleColorMode: () => { } });

function MyColor() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 0,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

/**
 * * App
 * @returns component with routing
 */
function App() {
  const [login, setLogin] = useState(true);
  const handleLogin = () => {
    setLogin(!login)
  };

  const [mode, setMode] = useState('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className="container-fluid w-100 text-center">
          <div className='row'>
            <div className='col-2'>
              <div>Menú general</div>
            </div>
            <div className='col'>
              <MyColor></MyColor>
            </div>
            <div className='col-2'>
              <button onClick={handleLogin}>In/out</button>
            </div>
          </div>
        </div>
        <hr className='w-100 mt-1 p-0'></hr>
        <Router>
          {/* Route Switch */}
          <Switch>
            {/* *** Home Page *** */}
            {/* Redirections to protect routes */}
            <Route exact path="/" component={HomePage}>
              {
                login
                  ? <Redirect from="/" to="/dashboard" />
                  : <HomePage />
              }
            </Route>
            {/* Login routes */}
            {/* <Route exact path='/login' component={LoginPage}></Route> */}
            {/* Need to do as below to prevent entering login from browser w/o logging out */}
            <Route exact path="/login" component={LoginPage}>
              {
                login
                  ? <Redirect from="/" to="/dashboard" />
                  : <LoginPage />
              }
            </Route>
            {/* Register routes */}
            {/* Need to do as below to prevent entering register from browser w/ logged in */}
            <Route exact path="/register" component={RegisterPage}>
              {
                login
                  ? <Redirect from="/" to="/dashboard" />
                  : <RegisterPage />
              }
            </Route>
            {/* Dashboard routes */}
            {/* <Route exact path='/dashboard' component={DashboardPage}></Route> */}
            {/* Need to do as below to prevent entering dashboard from browser w/o logging in */}
            <Route exact path="/dashboard" component={DashboardPage}>
              {
                login
                  ? <DashboardPage />
                  : <Redirect from="/" to="/login" />
              }
            </Route>
            {/* Profile routes */}
            <Route exact path="/profile" component={ProfilePage}>
              {
                login
                  ? <ProfilePage />
                  : <Redirect from="/" to="/login" />
              }
            </Route>
            {/* Task List routes */}
            <Route exact path="/tasks" component={TaskPage}>
              {
                login
                  ? <TaskPage />
                  : <Redirect from="/" to="/login" />
              }
            </Route>
            {/* Settings routes */}
            <Route exact path="/settings" component={SettingsPage}>
              {
                login
                  ? <SettingsPage />
                  : <Redirect from="/" to="/login" />
              }
            </Route>
            {/* *** 404 - Page Not Found *** */}
            {/* Always least inside <Switch> */}
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

/**
 * * useContext export
 */
// export function useColorModeContext() {
//   return useContext(ColorModeContext);
// }