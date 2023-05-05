# Generar funcionalidad PWA Progressive Web App en aplicación existente

1.  `package.json` -> Instalar dependencias de Workbox:

    "workbox-background-sync": "^6.5.4",
    "workbox-broadcast-update": "^6.5.4",
    "workbox-cacheable-response": "^6.5.4",
    "workbox-core": "^6.5.4",
    "workbox-expiration": "^6.5.4",
    "workbox-google-analytics": "^6.5.4",
    "workbox-navigation-preload": "^6.5.4",
    "workbox-precaching": "^6.5.4",
    "workbox-range-requests": "^6.5.4",
    "workbox-routing": "^6.5.4",
    "workbox-strategies": "^6.5.4",
    "workbox-streams": "^6.5.4"

    After copying dependencies in json, run command again to install packages -> `npm install`

- NOTA: estas dependencias se instalan automáticamente con `npx create-react-app` con un template PWA. El comando sería: `npx create-react-app my-app --template cra-template-pwa`. Pero como la app en este caso queremos que sea existente, solo nos traemos las dependencias de esta app defecto.
  Source: https://create-react-app.dev/docs/making-a-progressive-web-app/

2.  Crear archivos de service worker: los crea también por defecto en el template PWA, los traemos del proyecto por defecto creado en el paso 1.
    `service-worker.js`
    `serviceWorkerRegistration.js`

3.  Importar archivos SW en nuestro `index.js`:
    On top: `import * as serviceWorkerRegistration from './serviceWorkerRegistration';`
    Below root.render(...): `serviceWorkerRegistration.register();`

4.  Tenemos que tener la app en producción para probarla, no se pueden en desarrollo (`npm start`)
    Para ello debemos formar la build y el server:
    Ejecutar en consola:
    `npm run build`
    `serve -s build -l 5000`

    O configurar un script que haga el proceso automático: npm run server-prod
    Previo incluir en `package.json` -> `"server-prod": "npm run build && serve -s build -l 5000"`

5.  Controlar en navegador que se haya creado el Service Worker en "Application" de la consola.
6.  Se puede instalar la app de forma "nativa" en la PC o teléfono móvil.
    La opción instalar aparece en la barra de búsqueda del explorador (ej. Google Chrome).