import { CombinedState } from '@reduxjs/toolkit';
import { CinemaData, CinemaProcess, UserProcess } from '../types/state';
import { Film } from '../types/films';

// функция для получения списка фильмов, подходящих по жанру
export const getFilmsByActiveGenre = (state: CombinedState<{ DATA: CinemaData; CINEMA: CinemaProcess; USER: UserProcess; }>) => {
  if (state.CINEMA.genre === 'All genres') {
    // return state.films;
    return state.DATA.films;
  }
  return state.DATA.films.filter((film) => film.genre === state.CINEMA.genre);
};

// функция для получения фильма из списка фильмов по его id
export const getFilmById = (arr: Film[], id: number): Film | undefined => {
  const callback = (film: Film): boolean => film.id === Number(id);
  return arr.find(callback);
};
