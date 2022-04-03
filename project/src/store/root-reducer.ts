import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { cinemaData } from './cinema-data/cinema-data';
import { cinemaProcess } from './cinema-process/cinema-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.data]: cinemaData.reducer,
  [NameSpace.cinema]: cinemaProcess.reducer,
  [NameSpace.user]: userProcess.reducer,
});
