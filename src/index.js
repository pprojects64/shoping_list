import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import StoreProvider from './store/provider';
import Store from './store';
import App from './app/App';
import './index.css';
import * as modules from './store/exports.js';


const container = document.getElementById('root');
const root = createRoot(container);


// Состояние приложения
const store = new Store(modules);
//подписываем приложение на изменение состояния т.к. оно локальное
store.subscribe(() => {
  root.render(
    <StoreProvider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </StoreProvider>
  );
});

// Сообщаем реакту что и куда рендерить.
root.render(
  <StoreProvider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StoreProvider>
);



