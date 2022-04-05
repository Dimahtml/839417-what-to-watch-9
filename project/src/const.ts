export const FILMS_PER_STEP = 8;
export const TIMEOUT_SHOW_ERROR = 2000;
export const MIN_MESSAGE_LENGTH = 50;
export const MAX_MESSAGE_LENGTH = 400;
export const RATING = 8;
export const MAX_RATING = 10;

export enum AppRoute {
  AddReview = '/films/:id/review',
  Film = '/films/:id',
  Main = '/',
  MyList = '/mylist',
  Player = '/player/:id',
  SignIn = '/login',
  NotFound = '/404',
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

// в AddToMyList Статус фильма может быть 1 или 0, где 1 добавляет фильма в список «к просмотру», а 0 удаляет
export enum APIRoute {
  Films = '/films',
  SimilarFilms = '/films/:id/similar',
  Film = '/films/:id',
  Promo = '/promo',
  Comments = '/comments/:id',
  FavoriteFilms = '/favorite',
  AddToFavorite = '/favorite/:filmId/:status',
  Login = '/login',
  Logout = '/logout',
  NotFound = '/notfound',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum NameSpace {
  data = 'DATA',
  user = 'USER',
}
