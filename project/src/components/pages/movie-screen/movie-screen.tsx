import React, { useState, MouseEvent } from 'react';
import { useParams } from 'react-router-dom';
import PageFooter from '../../page-footer/page-footer';
import Logo from '../../logo/logo';
import UserBlock from '../../user-block/user-block';
import FilmControl from './film-control/film-control';
import Tabs from './tabs/tabs';
import FilmsList from '../../films-list/films-list';
import { FILMS } from '../../../mocks/films';
import { TABS } from './tabs/tabs';

function MovieScreen(): JSX.Element {
  const { id } = useParams<{id: string}>();
  const [activeTab, setActiveTab] = useState<TABS>('Overview');

  const film = FILMS[Number(id) - 1];
  const similarFilms = FILMS.filter((item) => item.genre === film.genre);

  const onClickHandler = (evt: MouseEvent): void => {
    const target = evt.target as HTMLElement;
    if (target.textContent) {
      setActiveTab(target.textContent);
    }
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
