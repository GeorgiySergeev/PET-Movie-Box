// import { useEffect } from 'react';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { useDispatch } from 'react-redux';
// import { setIsLoggedIn, setUser } from './auth-slice';

// const AuthProvider = () => {
//   const auth = getAuth();
//   const dispatch = useDispatch();

//   const user = auth.currentUser;

//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     // ...
//   } else {
//     // No user is signed in.
//   }

//   //   useEffect(() => {
//   //     console.log('AuthProvider - useEffect is running');

//   //     const unsubscribe = onAuthStateChanged(auth, user => {
//   //       if (user) {
//   //         const userObj = {
//   //           email: user.email,
//   //           token: user.accessToken,
//   //           isLoggedIn: true,
//   //           id: user.uid,
//   //         };
//   //         dispatch(setUser(userObj));
//   //       } else {
//   //         dispatch(setIsLoggedIn(false));
//   //       }
//   //     });
//   //     console.log(unsubscribe);

//   //     return unsubscribe;
//   //   }, [auth, dispatch]);

//   return null;
// };

// export default AuthProvider;
