import FilmCard from '../main-screen/films-list/film-card/film-card';
import PageFooter from '../../page-footer/page-footer';
import Logo from '../../logo/logo';
import { Film, Films } from '../../../types/types';

type MyListScreenProps = {
  films: Films;
}

function MyListScreen({films}: MyListScreenProps): JSX.Element {
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
          {films.map((film: Film) => <FilmCard film={film} key={film.id}/>)}
        </div>
      </section>
      <PageFooter />
    </div>
  );
}

export default MyListScreen;
