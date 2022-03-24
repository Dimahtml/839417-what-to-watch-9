import { State } from '../types/state';

// функция для получения списка фильмов, подходящих по жанру
export const getFilmsByActiveGenre = (state: State) => {
  if (state.genre === 'All genres') {
    return state.films;
  }
  return state.films.filter((film) => film.genre === state.genre);
};
