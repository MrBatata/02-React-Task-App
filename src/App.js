import './App.css';

/* 
*  *** IMPORTS EJEMPLOS Y EJERCICIOS *** 
*/
// import Greeting from './components/pure/examples/greeting';
// import GreetingF from './components/pure/examples/greetingF';
// import Greetingstyled from './components/pure/examples/greetingStyled';
// import Componente1 from './hooks/examples/1useStateEjemplo';
// import Componente2 from './hooks/examples/2useRefuseEffectEjemplo';
import ComponenteConContexto from './hooks/examples/3useContextEjemplo';
// import ComponenteChildren from './hooks/examples/4props.childrenEjemplo';
// import { Didmount } from './hooks/examples/lifecycle/DidMount';
// import { DidmountHook } from './hooks/examples/lifecycle/DidMount';
// import Allcycles from './hooks/examples/lifecycle/AllCycles';
// import Clock from './components/pure/examples/clock';
// import ClockF from './components/pure/examples/clockF';
// import Padre from './components/containers/examples/padre';
// import ContactListComponent from './components/containers/examples/contact_list';
// import OptionalRender from './components/pure/examples/optionalRender';
// import LoginFormik from './components/pure/forms/examples/loginFormik';
// import RegisterFormik from './components/pure/forms/examples/registerFormik';
// import AsyncExample from './components/pure/examples/AsyncExample';
// import ObservableExample from './components/pure/examples/ObservableExample';
// import FetchExample from './components/pure/examples/FetchExample';
// import AxiosExample from './components/pure/examples/AxiosExample';
// import ChuckJokeAxios from './components/pure/examples/ChuckJokeAxios';
// import AxiosCRUDexample from './components/pure/examples/AxiosCRUDExample';

/* 
*  *** IMPORTS PROYECTO *** 
*/
// import TaskListComponent from './components/containers/task_list';

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
      <ComponenteConContexto></ComponenteConContexto>
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
      {/* <RegisterFormik></RegisterFormik> */}

      {/* *** EJEMPLO DE PROCESOS ASINCRONOS *** */}
      {/* <AsyncExample></AsyncExample> */}
      {/* <ObservableExample></ObservableExample> */}
      {/* <FetchExample></FetchExample> */}
      {/* <AxiosExample></AxiosExample> */}
      {/* <ChuckJokeAxios></ChuckJokeAxios> */}
      {/* <AxiosCRUDexample></AxiosCRUDexample> */}

      {/* *** PROYECTO *** */}
      {/* <TaskListComponent></TaskListComponent> */}


    </div>
  );
}

export default App;
