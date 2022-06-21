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
import favoritesDataReducer from "./features/favoritesData.js";
import searchReducer from './features/search.js'
import errorReducer from './features/error.js'

const store = configureStore({
  reducer: {
    beers: beersReducer,
    favorites: favoritesReducer,
    favoritesData : favoritesDataReducer,
    search: searchReducer,
    error: errorReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>

    {/* provider - every component in the app should have access to this store (global state) */}
      <Provider store={store}> 
        <App />
      </Provider>

    </BrowserRouter>
);

reportWebVitals();
