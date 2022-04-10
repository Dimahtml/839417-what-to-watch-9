import request from 'axios';
import { store } from '../store';
import { setError } from '../store/cinema-data/cinema-data';
import { clearErrorAction } from '../store/api-actions';
import { ErrorType } from '../types/error';
import { HttpCode } from '../const';

export const handleError = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const errorHandle = (message: string) => {
    store.dispatch(setError(message));
    store.dispatch(clearErrorAction());
  };

  const {response} = error;

  if (response) {
    switch (response.status) {
      case HttpCode.BadRequest:
      case HttpCode.Unauthorized:
      case HttpCode.NotFound:
        errorHandle(response.data.error);
        break;
    }
  }
};
