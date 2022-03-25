import { createAction } from '@reduxjs/toolkit';
import { Film, Films } from '../types/films';
import { Reviews } from '../types/reviews';

export const changeGenre = createAction('changeGenre', (value: string) => ({payload: value}));

export const loadFilms = createAction<Films>('data/loadFilms');

export const loadPromoFilm = createAction<Film>('data/loadPromoFilm');

export const loadReviews = createAction<Reviews>('data/loadReviews');
