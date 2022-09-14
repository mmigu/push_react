// Firebase Cloud Messaging Configuration File. 
// Read more at https://firebase.google.com/docs/cloud-messaging/js/client && https://firebase.google.com/docs/cloud-messaging/js/receive

import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

var firebaseConfig = {
  apiKey: "AIzaSyA1W1fzmW3g2BHLx4MFn0JWn67MWmVAck4",
  authDomain: "pwa-pymental.firebaseapp.com",
  projectId: "pwa-pymental",
  storageBucket: "pwa-pymental.appspot.com",
  messagingSenderId: "257288368123",
  appId: "1:257288368123:web:6c4ae0b1f3f93cb899655e"
};

initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: `BEB9Fa_G-lQ4AuR7MQDf-Ljps3T_BvUO4r5KeUMoTSgaR6AAF7UkufWO0UKR0INxGL0sA2TGdM7l718M_MZNw88` })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker `messaging.onBackgroundMessage` handler.
export const onMessageListener = () =>
  new Promise((resolve) => {    
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

  
