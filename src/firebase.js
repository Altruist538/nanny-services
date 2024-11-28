// import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };
// initializeApp(firebaseConfig);
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCcJJVtbacZNZJpGmR3fFi1-EIFfdNOQo4',
  authDomain: 'nannies-61787.firebaseapp.com',
  databaseURL:
    'https://nannies-61787-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'nannies-61787',
  storageBucket: 'nannies-61787.appspot.com',
  messagingSenderId: '92073856826',
  appId: '1:92073856826:web:bd174e673eb6481ab64a03',
};
initializeApp(firebaseConfig);
