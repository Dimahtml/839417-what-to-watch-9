export const FILMS_PER_STEP = 8;
export const TIMEOUT_SHOW_ERROR = 2000;
export const RATING = 0;
export const MAX_RATING = 10;
export const MAX_SIMILAR_FILMS_COUNT = 4;
export const DEFAULT_GENRE = 'All genres';

export enum MessageLength {
  Min = 50,
  Max = 400,
}

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
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

export enum NameSpace {
  data = 'DATA',
  user = 'USER',
}
