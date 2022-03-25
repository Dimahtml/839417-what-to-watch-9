import { createReducer } from '@reduxjs/toolkit';
import { changeGenre } from './action';
import { FILMS } from '../mocks/films';

const initialState = {
  genre: 'All genres',
  films: FILMS,
  promoFilm: FILMS[0],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    });
});

export { reducer };
