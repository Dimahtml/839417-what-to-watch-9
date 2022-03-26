import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../hooks';

import { fetchReviewsAction } from '../../../store/api-actions';
import { store } from '../../../store';
import PageFooter from '../../page-footer/page-footer';
import Logo from '../../logo/logo';
import UserBlock from '../../user-block/user-block';
import FilmControl from './film-control/film-control';
import Tabs from './tabs/tabs';
import FilmsList from '../../films-list/films-list';
import { Film } from '../../../types/films';
import { TabTitle } from '../../../const';

function MovieScreen(): JSX.Element {
  const { id } = useParams<{id: string}>();
  const films = useAppSelector((state) => state.films);
  const film = films[Number(id) - 1];
  const similarFilms = films.filter((item: Film) => item.genre === film.genre && item.id !== film.id);

  const [activeTab, setActiveTab] = useState<TabTitle>(TabTitle.Overview);

  if (id) {
    store.dispatch(fetchReviewsAction(id));
  }

  const onClickHandler = (tabTitle: TabTitle): void => {
    setActiveTab(tabTitle);
  };

  return (
    <React.Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <FilmControl film={film} />
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt="{film.name} poster" width="218" height="327" />
            </div>

            <Tabs activeTab={activeTab} film={film} onClickHandler={onClickHandler} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={similarFilms} />
        </section>
        <PageFooter />
      </div>
    </React.Fragment>
  );
}

export default MovieScreen;
