import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, MAX_SIMILAR_FILMS_COUNT } from '../../const';
import { CinemaData } from '../../types/state';

const initialState: CinemaData = {
  films: [],
  similarFilms: [],
  favoriteFilms: [],
  promoFilm: null,
  reviews: [],
  isDataLoaded:false,
  genre: 'All genres',
  error: '',
};

export const cinemaData = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    loadFilm: (state, action) => {
      state.films.push(action.payload);
    },
    loadPromoFilm: (state, action) => {
      state.promoFilm = action.payload;
    },
    loadFilms: (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    },
    loadSimilarFilms: (state, action) => {
      state.similarFilms = action.payload.slice(0, MAX_SIMILAR_FILMS_COUNT);
      state.isDataLoaded = true;
    },
    loadReviews: (state, action) => {
      state.reviews = action.payload;
    },
    changeGenre: (state, action) => {
      state.genre = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    loadFavoriteFilms: (state, action) => {
      state.favoriteFilms = [...action.payload];
    },
    updateFilm: (state, action) => {
      state.favoriteFilms = [];

      state.films = state.films.map((film) => {
        if (film.id === action.payload.id) {
          return action.payload;
        }
        return film;
      });

      if (state.promoFilm?.id === action.payload.id) {
        state.promoFilm = action.payload;
      }
    },
  },
});

export const {
  loadFilm,
  loadPromoFilm,
  loadFilms,
  loadSimilarFilms,
  loadFavoriteFilms,
  updateFilm,
  loadReviews,
  changeGenre,
  setError,
} = cinemaData.actions;
