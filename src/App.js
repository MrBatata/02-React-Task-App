import logo from './logo.svg';
import './App.css';

/* 
*  *** IMPORTS EJEMPLOS Y EJERCICIOS *** 
*/
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
// import Greetingstyled from './components/pure/greetingStyled';
// import Componente1 from './hooks/1useStateEjemplo';
// import Componente2 from './hooks/2useRefuseEffectEjemplo';
// import ComponenteConContexto from './hooks/3useContextEjemplo';
// import ComponenteChildren from './hooks/4props.childrenEjemplo';
// import { Didmount } from './hooks/lifecycle/DidMount';
// import { DidmountHook } from './hooks/lifecycle/DidMount';
// import Allcycles from './hooks/lifecycle/AllCycles';
// import Clock from './components/pure/clock';
// import ClockF from './components/pure/clockF';
// import Padre from './components/containers/padre';
// import ContactListComponent from './components/containers/contact_list';
// import OptionalRender from './components/pure/optionalRender';
// import LoginFormik from './components/pure/forms/loginFormik';
// import RegisterFormik from './components/pure/forms/registerFormik';

/* 
*  *** IMPORTS PROYECTO *** 
*/
import TaskListComponent from './components/containers/task_list';

/* 
*  *** APP - Functional component *** 
*/
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* </header> */}
      {/* *** EJEMPLOS Y EJERCICIOS *** */}
      {/* Componente propio*/}
      {/* <Greeting name="Mr. Batata"></Greeting> */}
      {/* <GreetingF name="Mr. Batata"></GreetingF> */}
      {/* <Componente1></Componente1> */}
      {/* <Componente2></Componente2> */}
      {/* <ComponenteConContexto></ComponenteConContexto> */}
      {/* <ComponenteChildren nombre="Mr. Batata"> */}
      {/* Todo lo que está acá será tratado como props.children */}
      {/* <h3>Contenido del Children</h3> */}
      {/* <h4>Hola</h4> */}
      {/* </ComponenteChildren> */}
      {/* <Didmount></Didmount> */}
      {/* <DidmountHook></DidmountHook> */}
      {/* <Allcycles></Allcycles> */}
      {/* <Greetingstyled nombre='Mr. Batata'></Greetingstyled> */}
      {/* <ClockF></ClockF> */}
      {/* <Padre namePadre={'BataPadre'}></Padre> */}
      {/* <ContactListComponent></ContactListComponent> */}
      {/* <OptionalRender></OptionalRender> */}
      {/* <LoginFormik></LoginFormik> */}
      <hr></hr>
      {/* <RegisterFormik></RegisterFormik> */}
      <hr></hr>

      {/* *** PROYECTO *** */}
      <TaskListComponent></TaskListComponent>


    </div>
  );
}

export default App;
