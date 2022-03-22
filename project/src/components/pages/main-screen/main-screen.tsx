import React from 'react';
import { useAppSelector } from '../../../hooks';
import { getFilmsByActiveGenre } from '../../../store/selectors';

import FilmsList from '../../films-list/films-list';
import FilmPromo from './film-promo/film-promo';
import PageFooter from '../../page-footer/page-footer';
import GenresList from './genres-list/genres-list';
import ShowMoreBtn from './show-more-btn/show-more-btn';

function MainScreen(): JSX.Element {
  const films = useAppSelector((state) => state.films);
  const activeFilms = useAppSelector(getFilmsByActiveGenre);

  return (
    <React.Fragment>
      {/* пока нет сервера promoFilm равен первому фильму из стейта */}
      <FilmPromo promoFilm={films[0]} />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList films={films} />
          <FilmsList films={activeFilms} />
          <ShowMoreBtn />
        </section>
        <PageFooter />
      </div>
    </React.Fragment>
  );
}

export default MainScreen;
