import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyDhAS1gI-7olmNcdspBhNRllEhm8eoyPRo',
  authDomain: 'test-zen-36daf.firebaseapp.com',
  projectId: 'test-zen-36daf',
  storageBucket: 'test-zen-36daf.appspot.com',
  messagingSenderId: '523033310851',
  appId: '1:523033310851:web:dd3f8b9f0411602452cdb6',
  measurementId: 'G-ESMERTKD9S',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const generateToken = async () => {
  try {
    const permission = await Notification.requestPermission();
    console.log('Notification permission:', permission);

    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey:
          'BC23VXkETzkqRVxJta-AaI6zsB17pNENTdpDLWZwrUORqbtKWlq4HMhCXgnhu-fajSXMJ2DWRywNQh99R1IKkwI',
      });
      console.log('FCM Token:', token);
      return token;
    } else {
      console.warn('Notification permission denied');
      return null; // Or handle accordingly if permission is denied
    }
  } catch (error) {
    console.error('Error generating FCM token:', error);
    return null; // Handle error gracefully
  }
};

// messaging.onMessage((payload) => {
//   console.log('Message received. ', payload);
//   // Show notification if needed
// });

export { app, messaging };
