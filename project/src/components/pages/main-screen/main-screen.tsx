import React, { useState, useEffect, MouseEventHandler } from 'react';
import { useAppSelector } from '../../../hooks';
import { getFilmsByActiveGenre } from '../../../store/selectors';

import FilmsList from '../../films-list/films-list';
import FilmPromo from './film-promo/film-promo';
import PageFooter from '../../page-footer/page-footer';
import GenresList from './genres-list/genres-list';
import ShowMoreBtn from './show-more-btn/show-more-btn';
import { Film } from '../../../types/films';
import { FILMS_PER_STEP } from '../../../const';

function MainScreen(): JSX.Element {
  const genre = useAppSelector((state) => state.genre);
  const films = useAppSelector((state) => state.films);
  const activeFilms = useAppSelector(getFilmsByActiveGenre);
  const [showedFilms, setShowedFilms] = useState<Film[]>(activeFilms.slice(0, FILMS_PER_STEP));

  useEffect(() => {
    setShowedFilms(activeFilms.slice(0, FILMS_PER_STEP));
  }, [films, activeFilms, genre]);

  const onShowMoreBtnClick: MouseEventHandler<HTMLButtonElement> = () => {
    setShowedFilms(activeFilms.slice(0, showedFilms.length + FILMS_PER_STEP));
  };

  return (
    <React.Fragment>
      {/* пока нет сервера promoFilm равен первому фильму из стейта */}
      <FilmPromo promoFilm={films[0]} />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList films={films} />
          <FilmsList films={showedFilms} />
          {showedFilms.length < activeFilms.length
          && <ShowMoreBtn onShowMoreBtnClick={onShowMoreBtnClick} />}
        </section>
        <PageFooter />
      </div>
    </React.Fragment>
  );
}

export default MainScreen;
