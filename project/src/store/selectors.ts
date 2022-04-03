import { State } from '../types/state';
import { Film } from '../types/films';

// функция для получения списка фильмов, подходящих по жанру
export const getFilmsByActiveGenre = (state: State) => {
  if (state.genre === 'All genres') {
    return state.films;
  }
  return state.films.filter((film) => film.genre === state.genre);
};

// функция для получения фильма из списка фильмов по его id
export const getFilmById = (arr: Film[], id: number): Film | undefined => {
  const callback = (film: Film): boolean => film.id === Number(id);
  return arr.find(callback);
};
