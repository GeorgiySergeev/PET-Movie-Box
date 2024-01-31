// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
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
  storageBucket: 'moviebox-9de56.appspot.com',
  messagingSenderId: '211296617028',
  appId: '1:211296617028:web:7c50179f0e25e8f2117211',
  measurementId: 'G-3XV3TN6DZZ',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);
