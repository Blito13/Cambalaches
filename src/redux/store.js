import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Usa localStorage
import productReducer from './productSlice';


// Configuración de Redux Persist
const persistConfig = {
  key: 'root', // Clave para el almacenamiento
  storage, // Usa localStorage
  whitelist: ['products'], // Especifica qué reducers quieres persistir
};

// Combina tus reducers
const rootReducer = combineReducers({
  products: productReducer,
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