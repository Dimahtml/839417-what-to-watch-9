export const FILMS_PER_STEP = 8;
export const TIMEOUT_SHOW_ERROR = 2000;

export enum AppRoute {
  AddReview = '/films/:id/review',
  Film = '/films/:id',
  Main = '/',
  MyList = '/mylist',
  Player = '/player/:id',
  SignIn = '/login',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum TabTitle {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export enum APIRoute {
  Films = '/films',
  SimilarFilms = '/films/:id/similar',
  CurrentFilm = '/films/:id',
  Promo = '/promo',
  Comments = '/comments/:id',
  Login = '/login',
  Logout = '/logout',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}
