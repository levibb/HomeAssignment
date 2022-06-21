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
import searchReducer from './features/search.js'

const store = configureStore({
  reducer: {
    beers: beersReducer,
    favorites: favoritesReducer,
    search: searchReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>

    {/* provider means - every compoent im our app should have access to this store (global state) */}
        <Provider store={store}> 
          <App />
        </Provider>

    </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();
