import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import authReducer from "./state/state";
import storage from "redux-persist/lib/storage";
import "./index.css";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

/* Configuration de redux persist */
const persistConfig = { key: "root", storage, version: 1 };

/* Crée un reducer persistant en utilisant le reducer authReducer */
const persistedReducer = persistReducer(persistConfig, authReducer);

/* Crée le store ou tout simplement le magasin Redux configuré */
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
