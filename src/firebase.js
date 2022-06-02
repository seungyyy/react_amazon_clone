import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBDcp94unF7lD6K6O4dfK8wQ6HrqlxOfCo',
  authDomain: 'challenge-d087a.firebaseapp.com',
  projectId: 'challenge-d087a',
  storageBucket: 'challenge-d087a.appspot.com',
  messagingSenderId: '496269736328',
  appId: '1:496269736328:web:db71fc0ad7b444470a223d',
  measurementId: 'G-FLPW1LKC6Q',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
