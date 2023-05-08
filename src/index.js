import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './index.css';
import './styles/task.css';
import './styles/task-list.css';

import App from './App';
import Copyright from './components/pure/Copyright';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

/**
 * * DOM render
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container-fluid w-50 text-center">
      <div className='row'>
        <div className='col-6'>
          <button id="update-button">Instalar Update</button>
        </div>
        <div className='col-6'>
          <button id="skip-waiting-button">Activar Update</button>
        </div>
      </div>
    </div>
    <hr className='vw-100 m-0 my-1 p-0'></hr>
    <App />
    <Copyright />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// This code adds functions to both buttons above: checks for SW updates and activates the update
const registerServiceWorker = async () => {
  try {
    const registration = await navigator.serviceWorker.register('/service-worker.js', { scope: '/' });
    console.log('Service worker registered:', registration);

    const updateButton = document.getElementById('update-button');
    const skipWaitingButton = document.getElementById('skip-waiting-button');

    updateButton.addEventListener('click', async () => {
      await registration.update();
      console.log('Service worker updated.');
    });

    skipWaitingButton.addEventListener('click', async () => {
      const worker = await navigator.serviceWorker.ready;
      if (worker.waiting) {
        worker.waiting.postMessage({ type: 'SKIP_WAITING' });
        console.log('Sent SKIP_WAITING message to service worker.');
      }
    });

    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;
      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            updateButton.disabled = false;
            skipWaitingButton.disabled = false;
          } else {
            console.log('Service worker installed for the first time.');
          }
        }
      });
    });

    navigator.serviceWorker.addEventListener('controllerchange', () => {
      console.log('Service worker controller changed.');
      window.location.reload();
    });

    navigator.serviceWorker.addEventListener('message', (event) => {
      if (event.data.type === 'SKIP_WAITING_RESULT') {
        window.location.reload();
        console.log('Received SKIP_WAITING_RESULT message from service worker.');
      }
    });

    if (registration.waiting) {
      updateButton.disabled = false;
      skipWaitingButton.disabled = false;
    }
  } catch (error) {
    console.error('Service worker registration failed:', error);
  }
};

// Check if service workers are supported and register the service worker if they are
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    registerServiceWorker();
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
