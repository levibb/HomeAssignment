import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from "@reduxjs/toolkit";
import beersReducer from "./features/beers.js";
import favoritesReducer from "./features/favorites.js";

const store = configureStore({
  reducer: {
    beers: beersReducer,
    favorites: favoritesReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>

    {/* provider means - every compoent im our app should have access to this store (global statae) */}
        <Provider store={store}> 
          <App />
        </Provider>

    </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();
