import { Film } from '../types/films';
import { NameSpace } from '../const';
import { State } from '../types/state';

// функция для получения списка фильмов, подходящих по жанру
export const getFilmsByActiveGenre = (state: State) => {
  if (state.DATA.genre === 'All genres') {
    return state.DATA.films;
  }
  return state.DATA.films.filter((film) => film.genre === state.DATA.genre);
};

// функция для получения фильма из списка фильмов по его id
export const getFilmById = (arr: Film[], id: number): Film | undefined => {
  const callback = (film: Film): boolean => film.id === Number(id);
  return arr.find(callback);
};

export const getActiveGenre = ((state: State) => state[NameSpace.data].genre);

export const getErrorMessage = ((state: State) => state[NameSpace.data].error);

export const getFilms = ((state: State) => state[NameSpace.data].films);

export const getPromoFilm = ((state: State) => state[NameSpace.data].promoFilm);

export const getAuthorizationStatus = ((state: State) => state[NameSpace.user].authorizationStatus);

export const getIsDataLoaded = ((state: State) => state[NameSpace.data].isDataLoaded);

