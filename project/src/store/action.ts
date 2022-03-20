import { createAction } from '@reduxjs/toolkit';
import { FilmGenre } from '../const';

export const changeGenre = createAction('changeGenre', (value: FilmGenre) => ({payload: value}));
export const getFilmsList = createAction('getFilmsList');
