import { useState, MouseEvent } from 'react';
import Tabs from './tabs/tabs';
import { Film } from '../../../../types/types';
import { TABS } from './tabs/tabs';

type FilmInfoProps = {
  film: Film;
};

function FilmInfo({ film }: FilmInfoProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeTab, setActiveTab] = useState<TABS>('Overview');

  const onClickHandler = (evt: MouseEvent): void => {
    const target = evt.target as HTMLElement;
    // eslint-disable-next-line no-console
    console.log(evt);
    // eslint-disable-next-line no-console
    console.log(target.textContent);
    if (target.textContent) {
      setActiveTab(target.textContent);
    }
  };

  return (
    <div className="film-card__desc">
      <Tabs activeTab={activeTab} onClickHandler={onClickHandler} />

      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        {film.description}

        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {film.starring.join(', ')} and other</strong></p>
      </div>
    </div>
  );
}

export default FilmInfo;
