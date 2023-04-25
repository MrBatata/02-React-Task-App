import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

/* 
*  *** Pages imports *** 
*/
import NotFoundPage from './pages/404/NotFoundPage';
import DashboardPage from './pages/dashboard/DashBoard';
import LoginPage from './pages/auth/LoginPage';
import TaskPage from './pages/tasks/TasksPage';
import HomePage from './pages/home/HomePage';
import RegisterPage from './pages/auth/RegisterPage';


/* 
*  *** APP - Functional component *** 
*/
function AppRoutingFinal() {

  // TODO: Change to dinamic value from session storage...
  // let loggedIn = true;
  let loggedIn = false;

  return (
    <Router>
      {/* Route Switch */}
      <Switch>

        {/* *** Home Page *** */}
        {/* Redirections to protect routes */}
        <Route exact path='/' component={HomePage}>
          {
            loggedIn ?
              <Redirect from='/' to='/dashboard'></Redirect> :
              <HomePage></HomePage>
          }
        </Route>

        {/* Login routes */}
        {/* <Route exact path='/login' component={LoginPage}></Route> */}
        {/* Need to do as below to prevent entering login from browser w/o logging out */}
        <Route exact path='/login' component={LoginPage}>
          {
            loggedIn ?
              <Redirect from='/' to='/dashboard'></Redirect> :
              <LoginPage></LoginPage>
          }
        </Route>

        {/* Register routes */}
        {/* Need to do as below to prevent entering login from browser w/o logging out */}
        {/* <Route exact path='/register' component={RegisterPage}>
          {
            loggedIn ?
              <Redirect from='/' to='/dashboard'></Redirect> :
              <RegisterPage></RegisterPage>
          }
        </Route> */}

        {/* Dashboard routes */}
        {/* <Route exact path='/dashboard' component={DashboardPage}></Route> */}
        {/* Need to do as below to prevent entering dashboard from browser w/o logging in */}
        <Route exact path='/dashboard' component={DashboardPage}>
          {/* {
            loggedIn ?
              <DashboardPage></DashboardPage> :
              <Redirect from='/' to='/login'></Redirect>
          } */}
        </Route>

        {/* Task List routes */}
        {/* TODO: just a test.... */}
        <Route exact path='/tasks' component={TaskPage}>
          {
            loggedIn ?
              <TaskPage></TaskPage> :
              <Redirect from='/' to='/login'></Redirect>
          }
        </Route>

        {/* *** 404 - Page Not Found *** */}
        {/* Always least inside <Switch> */}
        <Route component={NotFoundPage} />

      </Switch>

    </Router>
  );
}

export default AppRoutingFinal;
