import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Film, Films } from '../types/films';
import { Reviews, PostingReview } from '../types/reviews';
import { AppDispatch, State } from '../types/state.js';
import { redirectToRoute } from './action';
import { setError } from '../store/cinema-data/cinema-data';
import { loadPromoFilm, loadFilm, loadFilms, loadSimilarFilms, loadReviews, loadFavoriteFilms, updateFilm } from './cinema-data/cinema-data';
import { requireAuthorization } from './user-process/user-process';

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

export const setErrorAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'setError',
  (message, {dispatch}) => {
    setTimeout(
      () => dispatch(setError(message)),
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

export const fetchFilmAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilm',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Film>(APIRoute.Film.replace(':id', id));
      dispatch(loadFilm(data));
    } catch(error) {
      errorHandle(error);
      dispatch(redirectToRoute(AppRoute.NotFound));
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

export const addReviewAction = createAsyncThunk<void, PostingReview, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/addReviews',
  async ({comment, rating, id}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<Reviews>(APIRoute.Comments.replace(':id', id), {comment, rating});
      dispatch(loadReviews(data));
      dispatch(redirectToRoute(AppRoute.Film.replace(':id', id)));
    }
    catch(error) {
      errorHandle(error);
    }
  },
);

export const fetchFavoriteFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/fetchFavoriteFilms',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Films>(APIRoute.FavoriteFilms);
      dispatch(loadFavoriteFilms(data));
    } catch(error) {
      errorHandle(error);
    }
  },
);

export const addFilmToFavoriteAction = createAsyncThunk<void, Film, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/addFilmToFavorite',
  async (film, {dispatch, extra: api}) => {
    try {
      const stringID = film.id.toString();
      const {data} = await api.post<Film>(APIRoute.AddToFavorite.replace(':filmId', stringID).replace(':status', '1'));
      dispatch(updateFilm(data));
    }
    catch(error) {
      errorHandle(error);
    }
  },
);

export const removeFilmFromFavoriteAction = createAsyncThunk<void, Film, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/removeFilmFromFavorite',
  async (film, {dispatch, extra: api}) => {
    try {
      const stringID = film.id.toString();
      const {data} = await api.post<Film>(APIRoute.AddToFavorite.replace(':filmId', stringID).replace(':status', '0'));
      dispatch(updateFilm(data));
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
