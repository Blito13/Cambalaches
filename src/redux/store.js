import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Usa localStorage
import productReducer from './productSlice';
import filterReducer from './filterSlice'; // Asegúrate de importar tu reducer de filtros 
import storageSession from 'redux-persist/lib/storage/session'

// Configuración de Redux Persist
const persistConfig = {
  key: 'root', // Clave para el almacenamiento
  storage : storageSession, // Usa localStorage
  whitelist: ['products'], // Especifica qué reducers quieres persistir
};

// Combina tus reducers
const rootReducer = combineReducers({
  products: productReducer,
  filters : filterReducer, //quitar persistencia en filtros si no es necesario
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
