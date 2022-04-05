import { useAppSelector } from '../../../hooks';
import { getFavoriteFilms } from '../../../store/selectors';
import FilmCard from '../../films-list/film-card/film-card';
import PageFooter from '../../page-footer/page-footer';
import Logo from '../../logo/logo';
import { Film } from '../../../types/films';
import { store } from '../../../store';
import { fetchFavoriteFilmsAction } from '../../../store/api-actions';
import { useEffect } from 'react';

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

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a href="/" className="user-block__link">Sign out</a>
          </li>
        </ul>
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
