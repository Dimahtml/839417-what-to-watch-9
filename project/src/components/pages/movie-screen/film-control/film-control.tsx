import { Link, useNavigate } from 'react-router-dom';
import { Film } from '../../../../types/films';
import { AppRoute } from '../../../../const';

type FilmControlProps = {
  film: Film;
};

function FilmControl({ film }: FilmControlProps): JSX.Element {
  const navigate = useNavigate();

  const onPlayerBtnClickHandler = () => navigate(AppRoute.Player);
  const onMyListBtnClickHandler = () => navigate(AppRoute.MyList);

  return (
    <div className="film-card__buttons">
      <button
        className="btn btn--play film-card__button"
        type="button"
        onClick={onPlayerBtnClickHandler}
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button
        className="btn btn--list film-card__button"
        type="button"
        onClick={onMyListBtnClickHandler}
      >
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
      </button>
      <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>
    </div>
  );
}

export default FilmControl;
