import { createAction } from '@reduxjs/toolkit';
import { Film, Films } from '../types/films';
import { Reviews } from '../types/reviews';
import { AppRoute, AuthorizationStatus } from '../const';

export const changeGenre = createAction('changeGenre', (value: string) => ({payload: value}));

export const loadFilms = createAction<Films>('data/loadFilms');

export const loadSimilarFilms = createAction<Films>('data/loadSimilarFilms');

export const loadCurrentFilm = createAction<Film>('data/loadCurrentFilm');

export const loadPromoFilm = createAction<Film>('data/loadPromoFilm');

export const loadReviews = createAction<Reviews>('data/loadReviews');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string>('setError');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
