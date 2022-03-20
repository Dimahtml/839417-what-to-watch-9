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

export enum FilmGenre {
  AllGenres = 'AllGenres',
  Action = 'Action',
  Adventure = 'Adventure',
  Fantasy = 'Fantasy',
  Comedy = 'Comedy',
  Crime = 'Crime',
  Drama = 'Drama',
  Thriller = 'Thriller',
}
