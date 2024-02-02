import { configureStore } from '@reduxjs/toolkit';
import { moviesReducer } from './movies/moviesSlice';
import { authReducer } from './auth/auth-slice';
// import userReduser from './FIREBASE-AUTH/userSlise'; //!  auth with firebase

// import { tvShowReduser } from './TV-shows/TvShow-slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'email'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    movies: moviesReducer,
    // user: userReduser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
