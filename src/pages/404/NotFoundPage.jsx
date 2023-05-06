import React from 'react';
import { useHistory } from 'react-router-dom';

function NotFoundPage() {
  const history = useHistory();

  const navigateTo = (path) => {
    history.push(path);
  };

  // const goBack = () => {
  //     history.goBack()
  // }

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <button onClick={() => navigateTo('/')}>Página principal</button>
    </div>
  );
}

export default NotFoundPage;
