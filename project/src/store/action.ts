import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';

export const changeGenre = createAction('changeGenre', (value: string) => ({payload: value}));

export const setError = createAction<string>('setError');

export const redirectToRoute = createAction<AppRoute | string>('redirectToRoute');
