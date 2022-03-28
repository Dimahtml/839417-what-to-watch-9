import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Film, Films } from '../types/films';
import { Reviews } from '../types/reviews';
import { AppDispatch, State } from '../types/state.js';
import { loadPromoFilm, loadFilms, loadReviews } from './action';
import { APIRoute } from '../const';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Films>(APIRoute.Films);
      dispatch(loadFilms(data));
    } catch(error) {
      // Обработку ошибок сделаю позже в следующем задании
      // eslint-disable-next-line no-console
      console.log('error');
    }
  },
);

export const fetchPromoFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Film>(APIRoute.Promo);
      dispatch(loadPromoFilm(data));
    } catch(error) {
      // Обработку ошибок сделаю позже в следующем задании
      // eslint-disable-next-line no-console
      console.log('error');
    }
  },
);

export const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchReviews',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Reviews>(APIRoute.Comments.replace(':id', id));
      dispatch(loadReviews(data));
    }
    catch(error) {
      // Обработку ошибок сделаю позже в следующем задании
      // eslint-disable-next-line no-console
      console.log('error');
    }
  },
);
