// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from 'firebase/database';
// import { getAnalytics } from 'firebase/analytics';
import { GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDj-YA1M2571KnT1Y0QDeLajiw5G_cDkAU',
  authDomain: 'moviebox-9de56.firebaseapp.com',
  projectId: 'moviebox-9de56',
  storageBucket: 'gs://moviebox-9de56.appspot.com',
  messagingSenderId: '211296617028',
  appId: '1:211296617028:web:7c50179f0e25e8f2117211',
  measurementId: 'G-3XV3TN6DZZ',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();

// const analytics = getAnalytics(app);

export function writeUserData(userId, email, watchlist) {
  const db = getDatabase();
  const reference = ref(db, 'users/' + userId);
  set(reference, {
    email,
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

  // Устанавливаем слушатель изменений данных
  onValue(userRef, snapshot => {
    const userData = snapshot.val();

    if (userData) {
      console.log('User data:', userData);

      // Далее вы можете использовать userData по вашему усмотрению
    } else {
      console.log('User not found');
    }
  });
};

// getUserData('Rwge4PJFryXdqs5OUfPdYXdT6Sb2');
