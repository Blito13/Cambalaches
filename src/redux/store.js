/* import { configureStore } from '@reduxjs/toolkit';
import auctionReducer from './auctionSlice';
import productReducer from './productSlice';

export const store = configureStore({
  reducer: {
    auction: auctionReducer,
    products: productReducer
  },
}); */


// store.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Usa localStorage
import auctionReducer from './auctionSlice';
import productReducer from './productSlice';
import sessionReducer from './sessionSlice'; // Importa el sessionSlice

// Configuración de Redux Persist
const persistConfig = {
  key: 'root', // Clave para el almacenamiento
  storage, // Usa localStorage
  whitelist: ['auction', 'products', 'session'], // Especifica qué reducers quieres persistir
};

// Combina tus reducers
const rootReducer = combineReducers({
  auction: auctionReducer,
  products: productReducer,
  session: sessionReducer, // Agrega el sessionReducer
});

// Crea un reducer persistido
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configura el store con el reducer persistido
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Desactiva la comprobación de serialización para Redux Persist
    }),
});

// Crea el persistor para Redux Persist
export const persistor = persistStore(store);