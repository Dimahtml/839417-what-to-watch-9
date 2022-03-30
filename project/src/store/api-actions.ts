import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Film, Films } from '../types/films';
import { Reviews } from '../types/reviews';
import { AppDispatch, State } from '../types/state.js';
import {
  loadPromoFilm,
  loadCurrentFilm,
  loadFilms,
  loadSimilarFilms,
  loadReviews,
  requireAuthorization,
  setError,
  redirectToRoute
} from './action';

import { errorHandle } from '../services/error-handle';
import { AppRoute, APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { saveToken, dropToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';

export const clearErrorAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'clearError',
  (_arg, {dispatch}) => {
    setTimeout(
      () => dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

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
      errorHandle(error);
    }
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Films>(APIRoute.SimilarFilms.replace(':id', id));
      dispatch(loadSimilarFilms(data));
    } catch(error) {
      errorHandle(error);
    }
  },
);

export const fetchCurrentFilmAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchCurrentFilm',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Film>(APIRoute.CurrentFilm.replace(':id', id));
      dispatch(loadCurrentFilm(data));
    } catch(error) {
      errorHandle(error);
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
      errorHandle(error);
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
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      await api.get(APIRoute.Login);
    } catch(error) {
      errorHandle(error);
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(redirectToRoute(AppRoute.Main));
    } catch(error) {
      errorHandle(error);
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch(error) {
      errorHandle(error);
    }
  },
);
