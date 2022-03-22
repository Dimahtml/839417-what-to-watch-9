import React from 'react';
import { useAppSelector } from '../../../hooks';
import { getActiveFilms } from '../../../utils';

import { Film, Films } from '../../../types/films';
import FilmsList from '../../films-list/films-list';
import FilmPromo from './film-promo/film-promo';
import PageFooter from '../../page-footer/page-footer';
import GenresList from './genres-list/genres-list';
import ShowMoreBtn from './show-more-btn/show-more-btn';

type MainScreenProps = {
  promoFilm: Film;
  films: Films;
}

function MainScreen({promoFilm, films}: MainScreenProps): JSX.Element {
  const genre = useAppSelector((state) => state.genre);
  const activeFilms = getActiveFilms(films, genre);

  return (
    <React.Fragment>
      <FilmPromo promoFilm={promoFilm} />
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
