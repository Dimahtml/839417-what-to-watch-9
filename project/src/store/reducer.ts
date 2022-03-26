import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, loadFilms, loadPromoFilm, loadReviews } from './action';
import { Film, Films } from '../types/films';
import { Reviews } from '../types/reviews';

const blankFilm = {
  name: '',
  posterImage: '',
  previewImage: '',
  backgroundImage: '',
  backgroundColor: '',
  description: '',
  rating: 0,
  scoresCount: 0,
  director: '',
  starring: [],
  runTime: 0,
  genre: '',
  released: 0,
  id: 0,
  isFavorite: false,
  videoLink: '',
  previewVideoLink: '',
};

type InitalState = {
  genre: string,
  films: Films,
  promoFilm: Film,
  reviews: Reviews,
  isDataLoaded: boolean,
}

const initialState: InitalState = {
  genre: 'All genres',
  films: [],
  promoFilm: blankFilm,
  reviews: [],
  isDataLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    });
});

export { reducer };
