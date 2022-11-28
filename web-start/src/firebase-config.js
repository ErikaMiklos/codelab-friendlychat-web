/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyB3m4zb4kCsW9GSB6JhqHd7Dmavx9egTP4",
  authDomain: "friendlychat-a73a5.firebaseapp.com",
  projectId: "friendlychat-a73a5",
  storageBucket: "friendlychat-a73a5.appspot.com",
  messagingSenderId: "145032357338",
  appId: "1:145032357338:web:137ac61711f52bd76e8ce3"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}