import { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoPlayer from '../../video-player/video-player';
import { Film } from '../../../types/films';

type FilmCardProps = {
  film: Film;
};

function FilmCard({film}: FilmCardProps): JSX.Element {
  const [isActive, setActive] = useState(false);

  const handleMouseEnter = () => setActive(true);
  const handleMouseLeave = () => setActive(false);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link className="small-film-card__link" to={`/films/${film.id}`}>
        <div className="small-film-card__image">
          <VideoPlayer
            isPlaying={isActive}
            src={film.previewVideoLink}
            poster={film.previewImage}
            width={280}
            height={175}
            muted
          />
        </div>
        <h3 className="small-film-card__title">{film.name}</h3>
      </Link>
    </article>
  );
}

export default FilmCard;
