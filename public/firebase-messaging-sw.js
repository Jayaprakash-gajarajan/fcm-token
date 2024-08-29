
// // // Import the required Firebase scripts.
// // console.log('Service worker script loaded');
// // importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
// // importScripts(
// //   'https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js'
// // );

// // // Initialize the Firebase app in the service worker.
// //   firebase.initializeApp({
// //     apiKey: 'AIzaSyDhAS1gI-7olmNcdspBhNRllEhm8eoyPRo',
// //     authDomain: 'test-zen-36daf.firebaseapp.com',
// //     projectId: 'test-zen-36daf',
// //     storageBucket: 'test-zen-36daf.appspot.com',
// //     messagingSenderId: '523033310851',
// //     appId: '1:523033310851:web:dd3f8b9f0411602452cdb6',
// //     measurementId: 'G-ESMERTKD9S',
// //   });

// // // Retrieve an instance of Firebase Messaging so that it can handle background messages.
// // const messaging = firebase.messaging();

// // messaging.onBackgroundMessage((payload) => {
// //   console.log(
// //     '[firebase-messaging-sw.js] Received background message ',
// //     payload
// //   );

// //   const notificationTitle = payload.notification.title;
// //   const notificationOptions = {
// //     body: payload.notification.body,
// //     icon: payload.notification.image,
// //     action: payload.notification.action,
// //   };

// //   self.registration.showNotification(notificationTitle, notificationOptions);
// // });

// // self.addEventListener('notificationclick', function (event) {
// //   event.notification.close();

// //   // Handle the click action
// //   if (event.action === 'view') {
// //     clients.openWindow(event.notification.data.click_action);
// //   } else {
// //     clients.openWindow(event.notification.data.click_action);
// //   }
// // });

// // console.log('Service worker script loaded');
// // importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
// // importScripts(
// //   'https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js'
// // );

// // // Initialize the Firebase app in the service worker.
// // firebase.initializeApp({
// //   apiKey: 'AIzaSyDhAS1gI-7olmNcdspBhNRllEhm8eoyPRo',
// //   authDomain: 'test-zen-36daf.firebaseapp.com',
// //   projectId: 'test-zen-36daf',
// //   storageBucket: 'test-zen-36daf.appspot.com',
// //   messagingSenderId: '523033310851',
// //   appId: '1:523033310851:web:dd3f8b9f0411602452cdb6',
// //   measurementId: 'G-ESMERTKD9S',
// // });

// // // Retrieve an instance of Firebase Messaging so that it can handle background messages.
// // const messaging = firebase.messaging();

// // messaging.onBackgroundMessage((payload) => {
// //   console.log(
// //     '[firebase-messaging-sw.js] Received background message ',
// //     payload
// //   );

// //   const notificationTitle = payload.notification.title;
// //   const notificationOptions = {
// //     body: payload.notification.body,
// //     icon: payload.notification.image,
// //     data: {
// //       click_action: payload.notification.click_action, // Ensure click_action is properly set
// //     },
// //     actions: [
// //       {
// //         action: 'view',
// //         title: 'View',
// //       },
// //     ],
// //   };

// //   self.registration.showNotification(notificationTitle, notificationOptions);
// // });

// // self.addEventListener('notificationclick', function (event) {

// //   event.stopPropagation();
// //   event.notification.close();
// //   console.log('Notification click received. Action: ', event.action);

// //   const clickAction = event.notification.data.click_action;
// //   if (event.action === 'view') {
// //     clients.openWindow(clickAction);
// //   } else {
// //     clients.openWindow(clickAction);
// //   }
// // });

// try {
//   console.log('Service worker script loaded');
//   importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
//   importScripts(
//     'https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js'
//   );

//   // Initialize Firebase and handle messaging
//   firebase.initializeApp({
//   apiKey: 'AIzaSyDhAS1gI-7olmNcdspBhNRllEhm8eoyPRo',
//   authDomain: 'test-zen-36daf.firebaseapp.com',
//   projectId: 'test-zen-36daf',
//   storageBucket: 'test-zen-36daf.appspot.com',
//   messagingSenderId: '523033310851',
//   appId: '1:523033310851:web:dd3f8b9f0411602452cdb6',
//   measurementId: 'G-ESMERTKD9S',
// });

//   const messaging = firebase.messaging();

//   messaging.onBackgroundMessage((payload) => {
//     console.log(
//       '[firebase-messaging-sw.js] Received background message',
//       payload
//     );
//     const notificationTitle = payload.notification.title;
//     // const notificationOptions = {
//     //   body: payload.notification.body,
//     //   icon: payload.notification.icon,
//     // };

//     const notificationOptions = {
//       body: payload.notification.body,
//       actions: payload.notification.actions,
//     };

//     self.registration.showNotification(notificationTitle, notificationOptions);
//   });

//   // self.addEventListener('notificationclick', function (event) {
//   //   console.log('Notification clicked');
//   //   event.notification.close();
//   //   // Handle notification click action here
//   // });

//   navigator.serviceWorker.addEventListener(
//     'notificationclick',
//     function (event) {
//       event.notification.close();
//       if (event.action === 'view') {
//         clients.openWindow('https://www.google.com'); // Change to the desired URL
//       } else {
//         clients.openWindow('https://default-url.com'); // Default URL if no action specified
//       }
//     }
//   );

//   self.addEventListener('notificationclick', function (event) {
//     const clickedNotification = event.notification;
//     clickedNotification.close();

//     const action = event.action;
//     const urlToOpen =
//       action === 'view'
//         ? 'https://66829ea6a2ea160307b51ab3--cheery-bonbon-fb874f.netlify.app/'
//         : 'https://66829ea6a2ea160307b51ab3--cheery-bonbon-fb874f.netlify.app/';

//     event.waitUntil(clients.openWindow(urlToOpen));
//   });

// } catch (error) {
//   console.error('Error loading service worker:', error);
// }


// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyDhAS1gI-7olmNcdspBhNRllEhm8eoyPRo',
  authDomain: 'test-zen-36daf.firebaseapp.com',
  projectId: 'test-zen-36daf',
  storageBucket: 'test-zen-36daf.appspot.com',
  messagingSenderId: '523033310851',
  appId: '1:523033310851:web:dd3f8b9f0411602452cdb6',
  measurementId: 'G-ESMERTKD9S',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    actions: payload.notification.actions,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const action = event.action;
  const urlToOpen =
    action === 'view'
      ? 'https://66829ea6a2ea160307b51ab3--cheery-bonbon-fb874f.netlify.app/'
      : 'https://66829ea6a2ea160307b51ab3--cheery-bonbon-fb874f.netlify.app/';

  event.waitUntil(clients.openWindow(urlToOpen));
});

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});


