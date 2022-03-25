import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../store';
import { store } from '../store';
import { Film, Films } from '../types/films';
import { Reviews } from '../types/reviews';
import { loadPromoFilm, loadFilms, loadReviews } from './action';
import { APIRoute } from '../const';

export const fetchFilmsAction = createAsyncThunk(
  'data/fetchFilms',
  async () => {
    const {data} = await api.get<Films>(APIRoute.Films);
    store.dispatch(loadFilms(data));
  },
);

export const fetchPromoFilmAction = createAsyncThunk(
  'data/fetchPromoFilm',
  async () => {
    const {data} = await api.get<Film>(APIRoute.Promo);
    store.dispatch(loadPromoFilm(data));
  },
);

export const fetchReviewsAction = createAsyncThunk(
  'data/fetchReviews',
  async () => {
    const {data} = await api.get<Reviews>(APIRoute.Comments);
    store.dispatch(loadReviews(data));
  },
);
