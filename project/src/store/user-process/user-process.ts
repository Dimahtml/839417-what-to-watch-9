import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, AuthorizationStatus } from '../../const';
import { UserProcess } from '../../types/state';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: undefined,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    requireAuthorization: (state, action: PayloadAction<UserProcess>) => {
      state.authorizationStatus = action.payload.authorizationStatus;
      state.user = action.payload.user;
    },
  },
});

export const {requireAuthorization} = userProcess.actions;
