import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './app/store';
import App from './pages/App';
import Game from './pages/Game';
import Error404 from './pages/Error404';
import './styles/index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter basename='/hangman'>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="game" element={<Game />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
