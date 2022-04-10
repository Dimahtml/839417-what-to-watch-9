import { Film } from '../types/films';
import { NameSpace } from '../const';
import { State } from '../types/state';
import { DEFAULT_GENRE, MAX_GENRES_COUNT } from '../const';

// функция для получения списка фильмов, подходящих по жанру
export const getFilmsByActiveGenre = (state: State) => {
  const genre = getActiveGenre(state);
  const films = getFilms(state);

  if (genre === DEFAULT_GENRE) {
    return films;
  }

  return films.filter((film) => film.genre === state.DATA.genre);
};

// функция для получения фильма из списка фильмов по его id
export const getFilmById = (id: number) => (state: State) =>
  state[NameSpace.Data].films.find((film: Film) => film.id === id);

export const getFilmsGenres = (state: State) =>
  [DEFAULT_GENRE, ...new Set(state[NameSpace.Data].films.map((film) => film.genre).slice(0, MAX_GENRES_COUNT))];

export const getActiveGenre = ((state: State) => state[NameSpace.Data].genre);

export const getErrorMessage = ((state: State) => state[NameSpace.Data].error);

export const getFilms = ((state: State) => state[NameSpace.Data].films);

export const getFavoriteFilms = ((state: State) => state[NameSpace.Data].favoriteFilms);

export const getSimilarFilms = ((state: State) => state[NameSpace.Data].similarFilms);

export const getPromoFilm = ((state: State) => state[NameSpace.Data].promoFilm);

export const getAuthorizationStatus = ((state: State) => state[NameSpace.User].authorizationStatus);

export const getIsDataLoaded = ((state: State) => state[NameSpace.Data].isDataLoaded);

export const getUserData = ((state: State) => state[NameSpace.User].user) ;
