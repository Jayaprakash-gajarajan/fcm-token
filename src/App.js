import { useEffect, useState } from 'react';
import './App.css';
import { generateToken, messaging } from './notifications/firebase';
import toast, { Toaster } from 'react-hot-toast';
import { onMessage } from 'firebase/messaging';

function App() {
  const [newToken, setNewToken] = useState();

  console.log('messaging', messaging);
  //./.././public/firebase-messaging-sw

  // Unregister all service workers
  // async function unregisterServiceWorkers() {
  //   const registrations = await navigator.serviceWorker.getRegistrations();
  //   registrations.forEach((registration) => {
  //     registration.unregister();
  //   });
  // }

  // Call this function to unregister old service workers
  // unregisterServiceWorkers()
  //   .then(() => {
  //     console.log('Successfully unregistered old service workers');
  //     // Now proceed to register your new service worker
  //     navigator.serviceWorker.register('path/to/new-service-worker.js');
  //   })
  //   .catch((error) => {
  //     console.error('Failed to unregister service workers:', error);
  //   });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register(`${process.env.PUBLIC_URL}/firebase-messaging-sw.js`)
      .then(function (registration) {
        console.log(
          'Service Worker registered with scope:',
          registration.scope
        );
      })
      .catch(function (err) {
        console.log('Service Worker registration failed:', err);
      });
  } else {
    console.log('Service Worker is not supported in this browser.');
  }

  // if ('serviceWorker' in navigator) {
  //   window.addEventListener('load', () => {
  //     navigator.serviceWorker
  //       .register(`${process.env.PUBLIC_URL}/firebase-messaging-sw.js`)
  //       .then((registration) => {
  //         console.log('Service Worker registered:', registration);
  //       })
  //       .catch((error) => {
  //         console.error('Service Worker registration failed:', error);
  //       });
  //   });
  // } else {
  //   console.log('Service Worker is not supported in this browser.');
  // }

  //  function getAccessToken() {
  //    return new Promise(function (resolve, reject) {
  //      const key = require('../placeholders/service-account.json');
  //      const jwtClient = new google.auth.JWT(
  //        key.client_email,
  //        null,
  //        key.private_key,
  //        SCOPES,
  //        null
  //      );
  //      jwtClient.authorize(function (err, tokens) {
  //        if (err) {
  //          reject(err);
  //          return;
  //        }
  //        resolve(tokens.access_token);
  //      });
  //    });
  //  }

  // const handleHitPushNotification = () => {

  // }

  const handleHitPushNotification = async (token) => {
    const notificationPayload = {
      message: {
        token:
          'BFz6izppqZA7JK_XOAhvNjZYy2U5NU8Tr-XGtZ8orcYIjWCOBTnsOql1soMTmD9LP-gGVtMngpWfigKqODGUa58',
        notification: {
          body: 'This is an FCM notification message!',
          title: 'FCM Message',
        },
      },
    };

    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + 'revokeAccessToken',
    };

    // axios
    //   .post(
    //     'https://fcm.googleapis.com/v1/projects/test-bff35/messages:send',
    //     notificationPayload,
    //     {
    //       headers,
    //     }
    //   )
    //   .then((response) => {
    //     console.log('Notification sent successfully:', response);
    //   })
    //   .catch((error) => {
    //     console.error('Error sending notification:', error);
    //   });
  };

  const handleCreate = () => {
    generateToken()
      .then((token) => {
        setNewToken(token);
        console.log('Token:', token);
      })
      .catch((error) => {
        console.error('Error generating token:', error);
      });
    console.log('id', generateToken());
  };

  useEffect(() => {
    //  generateToken()
    //    .then((token) => {
    //      setNewToken(token);
    //      console.log('Token:', token);
    //    })
    //    .catch((error) => {
    //      console.error('Error generating token:', error);
    //    });
    //  console.log('id', generateToken());
     onMessage(messaging, (payload) => {
       console.log('payload', payload);
       toast(payload.notification.body);
     });
  }, []);

  return (
    <div className="App">
      <header className="App-header">Hello User</header>
      <p style={{ color: 'red' }}>{newToken}</p>
      <button onClick={handleCreate}>Create</button>
    </div>
  );
}

export default App;
