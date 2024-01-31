// import { useEffect, useState } from 'react';
// import {
//   getAuth,
//   onAuthStateChanged,
//   signInWithPopup,
//   signOut,
// } from 'firebase/auth';
// import { app, googleAuthProvider } from '../../servises/firebase-auth';
// import { useSelector, useDispatch } from 'react-redux';
// import { setIsLoggedIn } from '../../redux/auth/auth-slice';

// export const AuthProvider = () => {
//   const auth = getAuth(app);
//   const [user, setUser] = useState(auth.currentUser);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, isUser => {
//       //   console.log(isUser.emailVerified);
//       if (isUser !== null) {
//         dispatch(setIsLoggedIn(true));
//         setUser(isUser);
//       } else {
//         // dispatch(setIsLoggedIn(isUser.emailVerified));

//         signInWithPopup(auth, googleAuthProvider)
//           .then(credentials => setUser(credentials?.user))
//           .catch(error => console.log('Error:', error.message));
//       }
//     });

//     return unsubscribe;
//   }, [auth, dispatch]);

//   const handleLogout = () => {
//     signOut(auth)
//       .then(() => {
//         // Успешный выход
//         dispatch(setIsLoggedIn(false));
//         setUser(null);
//       })
//       .catch(error => {
//         // Ошибка выхода
//         console.log('Logout Error:', error.message);
//       });
//   };

//   return user !== null ? <>{user.displayName}</> : <>isLoading</>;
// };
