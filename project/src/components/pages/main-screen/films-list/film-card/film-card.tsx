import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../../../../types/types';

type FilmCardProps = {
  film: Film;
};

function FilmCard({film}: FilmCardProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => setActive(true);
  const mouseLeaveHandler = () => setActive(false);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <div className="small-film-card__image">
        <img
          src={film.previewImage}
          alt={film.name}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>
          {film.name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
