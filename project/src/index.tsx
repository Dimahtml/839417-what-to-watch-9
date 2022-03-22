import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { FILMS, PROMO_FILM } from './mocks/films';
import { store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App promoFilm={PROMO_FILM} films={FILMS} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
