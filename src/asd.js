// Import service worker and configure it
const registerServiceWorker = async () => {
  try {
    const registration = await navigator.serviceWorker.register('/service-worker.js');
    console.log('Service worker registered:', registration);

    const updateButton = document.querySelector('.update-button');
    const skipWaitingButton = document.querySelector('.skip-waiting-button');

    updateButton.addEventListener('click', async () => {
      await registration.update();
      console.log('Service worker updated.');
    });

    skipWaitingButton.addEventListener('click', async () => {
      const worker = await navigator.serviceWorker.ready;
      if (worker.waiting) {
        await worker.waiting.postMessage({ type: 'SKIP_WAITING' });
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
        console.log('Received SKIP_WAITING_RESULT message from service worker.');
        window.location.reload();
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