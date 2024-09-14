import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

