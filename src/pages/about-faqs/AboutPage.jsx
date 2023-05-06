import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function AboutPage() {
  const location = useLocation();
  console.log(`We are in Route ${location.pathname}`);
  const history = useHistory();

  const navigate = (path) => {
    history.push(path);
  };

  const goBack = () => {
    history.goBack();
  };

  // const goForward = () => {
  //     history.goForward()
  // }

  return (
    <div>
      <h1>
        Acerca de | Preguntas frecuentes
      </h1>
      <div>
        <button onClick={() => navigate('/')}>Página principal</button>
        <button onClick={() => goBack()}>Atrás</button>
      </div>
    </div>

  );
}

export default AboutPage;
