import { store } from '../store/index';
import { AuthorizationStatus } from '../const';
import { Film, Films } from './films.js';
import { Reviews } from './reviews.js';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
};

export type CinemaData = {
  films: Films,
  similarFilms: Films,
  promoFilm: Film | null,
  reviews: Reviews,
  isDataLoaded: boolean,
};

export type CinemaProcess = {
  genre: string,
  error: string,
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
