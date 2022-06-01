import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDyI9Pq1_A_EKm6UiUVNKteJmhr6mF9kOs',
  authDomain: 'challenge-4f07e.firebaseapp.com',
  projectId: 'challenge-4f07e',
  storageBucket: 'challenge-4f07e.appspot.com',
  messagingSenderId: '444371646066',
  appId: '1:444371646066:web:e449a84680d5473e3474eb',
  measurementId: 'G-MK0CX93DZQ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
