import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBDcp94unF7lD6K6O4dfK8wQ6HrqlxOfCo',
  authDomain: 'challengeproject.firebaseapp.com',
  projectId: 'challenge-d087a',
  storageBucket: 'challenge-d087a.appspot.com',
  messagingSenderId: '496269736328',
  appId: '1:496269736328:web:db71fc0ad7b444470a223d',
  measurementId: 'G-FLPW1LKC6Q',
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth();


