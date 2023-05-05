const express = require("express");
const cors = require("cors");
const webpush = require("web-push");

// Middlewares
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Simulate client registration to the server
// This subscription (from swRegistration.js from de cliente) should be stored in server data base
// Here, as an example, we manually save it on a const.
const subscription = {
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
);


// Routes
app.get('/', async (req, res) => {
  // res.send('Todo Ok!');

  // Push notifications from server - code start
  // Now that we have client  pushSubscription in server data base (simulated), and permits vapidKeys
  const payload = JSON.stringify({
    title: "Mensaje del servidor!",
    message: "Soy un mensaje del más allá"
  });
  try {
    await webpush.sendNotification(subscription, payload);
    await res.send("Enviado");
  } catch (error) { console.log(error) };
  // Push notifications from server - code end
});

app.post('/subscription', (req, res) => {
  const { pushSubscription } = req.body;
  // This prints in console the client's subscription data (should be stored in server database)
  // console.log(pushSubscription); 
  res.sendStatus(200);
});

// Received from App Notification Manager Form
app.post('/custom-notification', (req, res) => {
  const { title, message } = req.body;
  const payload = JSON.stringify({ title, message });
  webpush.sendNotification(subscription, payload);
  res.send("Notificación personalizada enviada!");
});

// Server listen -> port
const port = 8000;
app.listen(port, () => console.log(`Server listening on port ${port}!`));