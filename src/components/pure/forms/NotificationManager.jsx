import React, { useState } from 'react';
import axios from 'axios';
/**
 * * Notifications from server -> express server
 */
function NotificationManager () {
  const [title, settitle] = useState('');
  const [message, setmessage] = useState('');

  const handleTitle = (e) => {
    settitle(e.target.value);
  };

  const handleMessage = (e) => {
    setmessage(e.target.value);
  };

  const sendNotification = () => {
    return axios.post('http://localhost:8000/custom-notification', {
      title,
      message,
    })
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err))
      .finally(console.log('Tried notification...'));
  };

  return (
    <div>
      <h3>Bienvenido al gestor de notificaciones</h3>
      <form className="p-1">
        <input
          placeholder="Escribir título"
          type="text"
          value={title}
          onChange={handleTitle}
          className="form-control m-3"
        />
        <textarea
          placeholder="Escribir mensaje"
          value={message}
          onChange={handleMessage}
          className="form-control m-3"
        />
        <button
          onClick={sendNotification}
          className="btn btn-primary m-3"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}

export default NotificationManager;
