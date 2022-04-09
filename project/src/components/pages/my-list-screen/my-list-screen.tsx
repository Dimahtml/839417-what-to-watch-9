import { useEffect } from 'react';

import { useAppSelector } from '../../../hooks';
import { store } from '../../../store';
import { getFavoriteFilms } from '../../../store/selectors';
import { Film } from '../../../types/films';
import { fetchFavoriteFilmsAction } from '../../../store/api-actions';

import UserBlock from '../../user-block/user-block';
import FilmCard from '../../films-list/film-card/film-card';
import PageFooter from '../../page-footer/page-footer';
import Logo from '../../logo/logo';

function MyListScreen(): JSX.Element {
  useEffect(() => {
    store.dispatch(fetchFavoriteFilmsAction());
  }, []);

  const favoriteFilms = useAppSelector(getFavoriteFilms);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {favoriteFilms.map((itemFilm: Film) => <FilmCard film={itemFilm} key={itemFilm.id}/>)}
        </div>
      </section>
      <PageFooter />
    </div>
  );
}

export default MyListScreen;
