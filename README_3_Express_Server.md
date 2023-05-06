# Notificaciones Push en React

En la lección 07 parte 2, montamos un servidor Express (simulado).

1.  Generamos carpeta `server` comenzamos con `npm init` para generar el `package.json`.
2.  Instalamos dependencias requeridas en carpeta, debiendo previo ingresar en terminal a dicha carpeta!
    ¡No en el principal del proyecto!!
    `npm i express` https://www.npmjs.com/package/express
    `npm i cors` https://www.npmjs.com/package/cors

3.  Creamos `index.js` dentro de server.
    ` 
const express = require("express");
const cors = require("cors");
// Middlewares
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Routes
app.get('/', (req, res) => {
res.send('Todo Ok!')
});
app.post('/subscription', (req, res) => {
const { pushSubscription } = req.body;
console.log(pushSubscription);
res.sendStatus(200);
});
// Server listen -> port
const port = 8000;
app.listen(port, () => console.log(`Server listening on port ${port}!`));
`

4.  Debemos configurar `serviceWorkerRegistration.js` para enviar registro al servidor.
    import
    `import axios from "axios";`

        Guardamos `registration.pushManager.subscribe(....)` en constante y luego ejecutamos un post mediante axios (podría usarse fetch pero es más simple con axios):
        `try {

    await axios.post('http://localhost:8000/subscription', { pushSubscription });
    } catch (error) {
    console.log(error)
    };`

5.  Debieramos poder levantar ambos servidor `node index.js` y la app `npm run server-prod`.

6.  Respuesta en el servidor, simulamos guardando en una constante...
    `    {
pushSubscription: {
endpoint: 'https://fcm.googleapis.com/fcm/send/dknPhDI6IqY:APA91bHm5JZejRFwBidlORWOTYmfNfrDDFobb1iQWi6d8RO4fs8Y8rRdovkyOckbNMG_OsUO9m5_HvgCL-zBySt1NFwmR-ca2S8ymse_lsO1ncEBO_9v-2AuXytoG26t_eiRilPfFEId',
    expirationTime: null,
    keys: {
        p256dh: 'BDiY0QAKzA8L7dx6l_fJumlh8U7jpRKbkhLNFkS4Q_O6k83dD3DRnrO7rnTdmHpH3Lw2LTNAnZEmE3J6rbqLvyw',
        auth: 'nh8oFhaKte2gle5SMKnTmw'
  }}
  }`

7.  Ya podemos simular el envío de notificaciones a la app (clientes), desde el servidor `index.js`.
8.  Ahora debemos configurar el SW de nuestra app, para que cada vez que reciba del servidor un evento push, pueda accionar.
    `self.addEventListener('push', event => {
const { title, message } = event.data.json();
self.registration.showNotification(title, { body: message });
})`

9.  Include new code in server `index.js`: need to install `npm i web-push`.
    Include import `const webpush = require("web-push");`
    
    `
// Simulate client registration to the server
// This subscription (from swRegistration.js from de cliente) should be stored in server data base
// Here, as an example, we manually save it on a const.
const pushSubscription = {
  endpoint: 'https://fcm.googleapis.com/fcm/send/dErRB3VsFV4:APA91bF47oPmY5nl27rGJk6gQJQooM5O-UkoK4fQhtBS14k16K8AqF7h4kxKvwZI8l3EIXV9eSeNrtGrkXwmpinDmSaQcow-grTDPmV8rp_8sDxaadHvEYSiGWa0sK3ntgBdBmpYt9ox',
  expirationTime: null,
  keys: {
    p256dh: 'BEzKpKHod5_WhpOOSrNtYgnw0uypbRekcl6Z7xPy-NzAd-nQ-SYquYaSb1ZkHzablXrY3w8aYHnRK6fVOTplwBU',
    auth: 'k-jWWq823VC8vwad-2NBUw'
  }
}
// Necessary permits to be able to push notifications to the client -> vapidKeys
const vapidKeys = {
  publicKey: 'BB_kgthgA79YIYKUfLgS9ugKvAi1iycUlBsV21rxRUyBl33olTGBPAZPRnlyRQ2R3XgSpN1x3fz8Cer9LJd8esU',
  privateKey: '0cHxaqeUYCfB3OtzdXFeA_xVbPcJtcOaHUDi7jvllDI'
}
webpush.setVapidDetails(
  'mailto:batata@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);`
