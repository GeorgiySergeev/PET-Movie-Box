import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from 'firebase/database';

import { GoogleAuthProvider } from 'firebase/auth';
import { setWatchList } from '../redux/watchlist/watchlist-slice';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();

// const analytics = getAnalytics(app);

export function writeUserData(userId, watchlist) {
  if (userId === null) return;
  const db = getDatabase();
  const reference = ref(db, 'users/' + userId);
  set(reference, {
    user: userId,
    watchlist,
  });
}
// writeUserData('newUserid', 'George', 'test@mail.com', 'urltoavatar', [
//   { id: 1 },
//   { id: 2 },
//   { id: 5 },
//   { id: 6, img: 'sasa', numb: 'red' },
// ]);

const db = getDatabase();
// const distanceRef = ref(db, 'users/' + userId, '/distance');

export const getUserData = userId => {
  const userRef = ref(db, `users/${userId}`);

  onValue(userRef, snapshot => {
    const userData = snapshot.val();

    if (userData) {
      setWatchList(userData.watchlist);
      return;
    } else {
      console.log('User not found');
    }
  });
};
