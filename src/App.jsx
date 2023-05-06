import React from 'react';
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
 * * App
 * @returns component with routing
 */
function App() {
  // TODO: Change to dinamic value from session storage...
  // const loggedIn = true;
  const loggedIn = false;

  return (
    <Router>
      {/* Route Switch */}
      <Switch>
        {/* *** Home Page *** */}
        {/* Redirections to protect routes */}
        <Route exact path="/" component={HomePage}>
          {
            loggedIn
              ? <Redirect from="/" to="/dashboard" />
              : <HomePage />
          }
        </Route>
        {/* Login routes */}
        {/* <Route exact path='/login' component={LoginPage}></Route> */}
        {/* Need to do as below to prevent entering login from browser w/o logging out */}
        <Route exact path="/login" component={LoginPage}>
          {
            loggedIn
              ? <Redirect from="/" to="/dashboard" />
              : <LoginPage />
          }
        </Route>
        {/* Register routes */}
        {/* Need to do as below to prevent entering register from browser w/ logged in */}
        <Route exact path="/register" component={RegisterPage}>
          {
            loggedIn
              ? <Redirect from="/" to="/dashboard" />
              : <RegisterPage />
          }
        </Route>
        {/* Dashboard routes */}
        {/* <Route exact path='/dashboard' component={DashboardPage}></Route> */}
        {/* Need to do as below to prevent entering dashboard from browser w/o logging in */}
        <Route exact path="/dashboard" component={DashboardPage}>
          {
            loggedIn
              ? <DashboardPage />
              : <Redirect from="/" to="/login" />
          }
        </Route>
        {/* Profile routes */}
        <Route exact path="/profile" component={ProfilePage}>
          {
            loggedIn
              ? <ProfilePage />
              : <Redirect from="/" to="/login" />
          }
        </Route>
        {/* Task List routes */}
        <Route exact path="/tasks" component={TaskPage}>
          {
            loggedIn
              ? <TaskPage />
              : <Redirect from="/" to="/login" />
          }
        </Route>
        {/* Settings routes */}
        <Route exact path="/settings" component={SettingsPage}>
          {
            loggedIn
              ? <SettingsPage />
              : <Redirect from="/" to="/login" />
          }
        </Route>
        {/* *** 404 - Page Not Found *** */}
        {/* Always least inside <Switch> */}
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
