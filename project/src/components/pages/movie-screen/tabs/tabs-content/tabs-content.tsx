import React from 'react';
import { Film } from '../../../../../types/films';
import { Reviews } from '../../../../../types/reviews';
import FilmReview from './film-review/film-review';
import { getFilmRating, getFormattedRuntime } from '../../../../../utils';

type TabsContentProps = {
  activeTab: string;
  film: Film;
  reviews: Reviews;
};

function TabsContent({activeTab, film, reviews}: TabsContentProps): JSX.Element {

  if (activeTab === 'Overview') {
    return (
      <React.Fragment>
        <div className="film-rating">
          <div className="film-rating__score">{film.rating}</div>
          <p className="film-rating__meta">
            <span className="film-rating__level">{getFilmRating(film.rating)}</span>
            <span className="film-rating__count">{film.scoresCount} ratings</span>
          </p>
        </div>

        <div className="film-card__text">
          <p>{film.description}</p>

          <p className="film-card__director"><strong>Director: {film.director}</strong></p>

          <p className="film-card__starring"><strong>Starring: {film.starring.join(', ')} and other</strong></p>
        </div>
      </React.Fragment>
    );
  } else if (activeTab === 'Details') {
    const starsWithoutLast: string[] = film.starring.slice();
    const starsLastItem: string[] = starsWithoutLast.splice(-1, 1);

    return (
      <div className="film-card__text film-card__row">
        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Director</strong>
            <span className="film-card__details-value">{film.director}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Starring</strong>
            <span className="film-card__details-value">
              {starsWithoutLast.map((starItem) => (
                <React.Fragment key={starItem}>
                  {starItem},<br />
                </React.Fragment>
              ))}
              {starsLastItem[0]}
            </span>
          </p>
        </div>

        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Run Time</strong>
            <span className="film-card__details-value">{getFormattedRuntime(film.runTime)}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Genre</strong>
            <span className="film-card__details-value">{film.genre}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Released</strong>
            <span className="film-card__details-value">{film.released}</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.slice(0, reviews.length / 2).map((review) => (
          <FilmReview review={review} key={review.id}/>
        ))}
      </div>
      <div className="film-card__reviews-col">
        {reviews.slice(reviews.length / 2, reviews.length).map((review) => (
          <FilmReview review={review} key={review.id}/>
        ))}
      </div>
    </div>
  );
}

export default TabsContent;
