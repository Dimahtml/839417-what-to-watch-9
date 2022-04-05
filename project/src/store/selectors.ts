import { Film } from '../types/films';
import { NameSpace } from '../const';
import { State } from '../types/state';

// функция для получения списка фильмов, подходящих по жанру
export const getFilmsByActiveGenre = (state: State) => {
  const genre = getActiveGenre(state);
  const films = getFilms(state);

  if (genre === 'All genres') {
    return films;
  }

  return films.filter((film) => film.genre === state.DATA.genre);
};

// функция для получения фильма из списка фильмов по его id
export const getFilmById = (id: number) => (state: State) =>
  state[NameSpace.data].films.find((film: Film) => film.id === id);

export const getFilmsGenres = (state: State) =>
  ['All genres', ...new Set(state[NameSpace.data].films.map((film) => film.genre))];

export const getActiveGenre = ((state: State) => state[NameSpace.data].genre);

export const getErrorMessage = ((state: State) => state[NameSpace.data].error);

export const getFilms = ((state: State) => state[NameSpace.data].films);

export const getFavoriteFilms = ((state: State) => state[NameSpace.data].favoriteFilms);

export const getPromoFilm = ((state: State) => state[NameSpace.data].promoFilm);

export const getAuthorizationStatus = ((state: State) => state[NameSpace.user].authorizationStatus);

export const getIsDataLoaded = ((state: State) => state[NameSpace.data].isDataLoaded);
