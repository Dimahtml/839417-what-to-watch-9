import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { CinemaProcess } from '../../types/state';

const initialState: CinemaProcess = {
  genre: 'All genres',
  error: '',
};

export const cinemaProcess = createSlice({
  name: NameSpace.cinema,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.genre = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { changeGenre } = cinemaProcess.actions;
