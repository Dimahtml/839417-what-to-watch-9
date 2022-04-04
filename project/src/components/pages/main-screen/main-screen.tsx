import React, { useState, useEffect, MouseEventHandler } from 'react';
import { useAppSelector } from '../../../hooks';
import {
  getAuthorizationStatus,
  getFilmsByActiveGenre,
  getActiveGenre,
  getPromoFilm,
  getIsDataLoaded
} from '../../../store/selectors';
import { fetchFilmsAction, fetchPromoFilmAction } from '../../../store/api-actions';
import { store } from '../../../store';

import FilmsList from '../../films-list/films-list';
import FilmPromo from './film-promo/film-promo';
import PageFooter from '../../page-footer/page-footer';
import GenresList from './genres-list/genres-list';
import ShowMoreBtn from './show-more-btn/show-more-btn';
import LoadingScreen from '../loading-screen/loading-screen';
import { Film } from '../../../types/films';
import { FILMS_PER_STEP } from '../../../const';
import { isCheckedAuth } from '../../../utils';

function MainScreen(): JSX.Element {
  const genre = useAppSelector(getActiveGenre);
  const activeFilms = useAppSelector(getFilmsByActiveGenre);
  const promoFilm = useAppSelector(getPromoFilm);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isDataLoaded = useAppSelector(getIsDataLoaded);

  const [showedFilms, setShowedFilms] = useState<Film[]>(activeFilms.slice(0, FILMS_PER_STEP));

  useEffect(() => {
    setShowedFilms(activeFilms.slice(0, FILMS_PER_STEP));
  }, [activeFilms, genre]);

  useEffect(() => {
    store.dispatch(fetchFilmsAction());
    store.dispatch(fetchPromoFilmAction());
  }, []);

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    setShowedFilms(activeFilms.slice(0, showedFilms.length + FILMS_PER_STEP));
  };

  if (!isDataLoaded || isCheckedAuth(authorizationStatus)) {
    return <LoadingScreen />;
  }

  return (
    <React.Fragment>
      <FilmPromo promoFilm={promoFilm} />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />
          <FilmsList films={showedFilms} />
          {showedFilms.length < activeFilms.length
          && <ShowMoreBtn onClick={handleClick} />}
        </section>
        <PageFooter />
      </div>
    </React.Fragment>
  );
}

export default MainScreen;
