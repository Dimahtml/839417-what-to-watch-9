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
  Promo = '/promo',
  Comments = '/comments/:id',
  Login = '/login',
  Logout = '/logout',
}

export const FILMS_PER_STEP = 8;
