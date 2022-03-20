import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getFilmsList } from './action';
import { FILMS } from '../mocks/films';
import { FilmGenre } from '../const';

const initialState = {
  genre: FilmGenre.AllGenres,
  films: FILMS,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilmsList, (state) => {
      if (state.genre === FilmGenre.AllGenres) {
        state.films = FILMS;
      } else {
        state.films = FILMS.filter((film) => film.genre === state.genre);
      }
    });
});

export { reducer };
