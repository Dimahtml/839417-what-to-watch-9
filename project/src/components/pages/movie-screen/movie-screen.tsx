import React from 'react';
import { useParams } from 'react-router-dom';
import FilmCard from '../main-screen/films-list/film-card/film-card';
import PageFooter from '../../page-footer/page-footer';
import Logo from '../../logo/logo';
import UserBlock from '../../user-block/user-block';
import FilmControl from './film-control/film-control';
import FilmInfo from './film-info/film-info';
import { Film, FILMS } from '../../../mocks/films';

function MovieScreen(): JSX.Element {
  const { id } = useParams<{id: string}>();
  const film = FILMS[Number(id) - 1];
  // временно определяем similarFilms пока нет запроса к серверу
  const similarFilms = FILMS.slice(0, 3);

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

            <FilmInfo film={film} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {similarFilms.map((similarFilm: Film) => <FilmCard film={similarFilm} key={similarFilm.id}/>)}
          </div>
        </section>
        <PageFooter />
      </div>
    </React.Fragment>
  );
}

export default MovieScreen;
