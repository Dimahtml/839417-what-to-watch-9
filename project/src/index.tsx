import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { FILMS, PROMO_FILM } from './mocks/films';

ReactDOM.render(
  <React.StrictMode>
    <App
      promoFilm={PROMO_FILM}
      films={FILMS}
    />
  </React.StrictMode>,
  document.getElementById('root'));
