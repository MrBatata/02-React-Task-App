import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TasksDetailPage from './pages/tasks/TasksDetailPage';
import LoginFormik from './components/pure/forms/loginFormik';
import LoginPage from './pages/auth/LoginPage';
import StatePage from './pages/home/StatePage';
import DashboardPage from './pages/dashboard/DashBoard';


/* 
*  *** APP - Functional component *** 
*/
function AppRoutingOne() {

  let logged = true;

  /* Needed due to loginFormik "await new Promise()" */
  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User Logged:', logged)
  }, []);

  /* Tasklist */
  let taskList = [
    {
      id: 1,
      name: 'Tarea 1',
      description: 'Mi primera tarea'
    },
    {
      id: 2,
      name: 'Tarea 2',
      description: 'Mi segunda tarea'
    },
  ]

  return (
    <div className="App">
      <Router>

        {/* Pages Menu */}
        <div>
          <aside>
            <Link to='/'>| HOME |</Link>
            <Link to='/login'>| LOG IN |</Link>
            <Link to='/task/1'>| Task 1 |</Link>
            <Link to='/task/2'>| Task 2 |</Link>
            <Link to='/about'>| ACERCA DE |</Link>
            <Link to='/faqs'>| PREGUNTAS FRECUENTES |</Link>
          </aside>
        </div>

        <Switch>
          <Route exact path='/' component={HomePage} ></Route>

          <Route exact path='/online-state' component={StatePage} ></Route>

          <Route path='/(about|faqs|preguntas|acerca)' component={AboutPage} ></Route>

          <Route path='/dashboard' component={DashboardPage} ></Route>

          {/* Condicional to Login status */}
          <Route path='/login' component={LoginFormik} >
            {
              logged ?
                () => {
                  alert('Estás logeado. Dirigiendo a Página Principal!');
                  return (
                    <Redirect to='/'></Redirect>
                  )
                } :
                <LoginPage></LoginPage>
            }

          </Route>

          {/* Condicional to Login status */}
          <Route path='/profile' component={ProfilePage} >
            {
              logged ?
                <ProfilePage></ProfilePage> :
                () => {
                  alert('Logeate primero!');
                  return (
                    <Redirect to='/login'></Redirect>
                  )
                }
            }
          </Route>
          {/* Condicional to Login status. TODO: still reachable from browser... */}
          <Route path='/tasks' component={TasksPage} />
          <Route
            exact
            path='/task/:id'
            render={
              ({ match }) => (<TasksDetailPage task={taskList[match.params.id - 1]} />)
            }
          >

          </Route>


          {/* *** 404 - Page Not Found *** */}
          <Route component={NotFoundPage} ></Route>
        </Switch>

      </Router>

    </div>
  );
}

export default AppRoutingOne;
