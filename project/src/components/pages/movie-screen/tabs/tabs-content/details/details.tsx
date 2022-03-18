import React from 'react';
import { Film } from '../../../../../../types/films';
import { getFormattedRuntime } from '../../../../../../utils';

type DetailsProps = {
  film: Film;
}

function Details({film}: DetailsProps): JSX.Element {
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

export default Details;
