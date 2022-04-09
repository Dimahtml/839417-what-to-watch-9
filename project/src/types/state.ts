import { store } from '../store/index';
import { AuthorizationStatus } from '../const';
import { Film, Films } from './films';
import { Reviews } from './reviews';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
};

export type CinemaData = {
  films: Films,
  similarFilms: Films,
  favoriteFilms: Films,
  promoFilm: Film | null,
  reviews: Reviews,
  isDataLoaded: boolean,
  genre: string,
  error: string,
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
