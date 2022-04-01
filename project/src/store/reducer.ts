import { createReducer } from '@reduxjs/toolkit';

import {
  changeGenre,
  loadFilms,
  loadSimilarFilms,
  loadCurrentFilm,
  loadPromoFilm,
  loadReviews,
  requireAuthorization,
  setError
} from './action';

import { Film, Films } from '../types/films';
import { Reviews } from '../types/reviews';
import { AuthorizationStatus } from '../const';

type InitalState = {
  genre: string,
  films: Films,
  similarFims: Films,
  currentFilm: Film | null,
  promoFilm: Film | null,
  reviews: Reviews,
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
  error: string,
};

const initialState: InitalState = {
  genre: 'All genres',
  films: [],
  similarFims: [],
  currentFilm: null,
  promoFilm: null,
  reviews: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadCurrentFilm, (state, action) => {
      state.currentFilm = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFims = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
