import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { CinemaData } from '../../types/state';

const initialState: CinemaData = {
  films: [],
  similarFilms: [],
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
      state.similarFilms = action.payload;
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
  },
});

export const { loadFilm, loadPromoFilm, loadFilms, loadSimilarFilms, loadReviews, changeGenre, setError } = cinemaData.actions;
