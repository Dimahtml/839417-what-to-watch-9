import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getActiveFilms } from './action';
import { FILMS } from '../mocks/films';

const initialState = {
  genre: 'All genres',
  films: FILMS,
  activeFilms: FILMS,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getActiveFilms, (state) => {
      if (state.genre === 'All genres') {
        state.activeFilms = FILMS;
      } else {
        state.activeFilms = FILMS.filter((film) => film.genre === state.genre);
      }
    });
});

export { reducer };
