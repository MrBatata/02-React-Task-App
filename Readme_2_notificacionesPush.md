# Notificaciones Push en React

1. Instalamos las dependencias para generar las vapid keys, con el fin de poder gestionar las notificaciones push en nuestro proyecto
   `npm i -g web-push` versión con más descargas @3.4.5
   `web-push generate-vapid-keys [--json]`
   Genera dos keys: 1 pública y 1 privada. Incluimos en `serviceWorkerRegistration.js`:
   `const vapidKeys = { publicKey: '...key...', privateKey: '...key...'}`

2. Modificamos la función register()
   `.then((registration) => {
// Start modification for Push Notifications
registration.pushManager.getSubscription()
.then(async sub => {
// const pushSubscription =
await registration.pushManager.subscribe({
userVisibleOnly: true,
applicationServerKey: vapidKeys.publicKey
});
// Aquí se lo enviamos al servidor
// await axios.post('http://localhost:8000/subscription', {
// pushSubscription
// });
});
// End modification for Push Notifications`

3. Gestionamos los permisos del navegador
4. Crearemos una notificación push indicando que existe una nueva versión del código
   En `service-worker.js` ->
   -> `self.addEventListener('install', (event) => {...`
   `self.registration.showNotification("Existe una nueva versión!", {body: "Instalala!"})`

   Agregamos también un lector de eventos para los push que recibiremos del servidor:
   `self.addEventListener('push', (event) => {
const { title, message } = event.data.json();
self.registration.showNotification(title, { body: message });
})`

Se puede probar desde el navegador, en "Aplication" -> "Service Workers" -> "Push"