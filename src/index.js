import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MainContextProvider from './Context/MainContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <MainContextProvider>
    <App />
    </MainContextProvider>
  </BrowserRouter>
);

