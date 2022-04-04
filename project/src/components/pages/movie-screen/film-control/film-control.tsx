import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks';
import { Film } from '../../../../types/films';
import { getAuthorizationStatus } from '../../../../store/selectors';
import { AppRoute, AuthorizationStatus } from '../../../../const';

type FilmControlProps = {
  film: Film;
};

function FilmControl({ film }: FilmControlProps): JSX.Element {
  const navigate = useNavigate();
  const { id } = useParams<{id: string}>();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const onPlayerBtnClickHandler = () => {
    if (id) {
      navigate(AppRoute.Player.replace(':id', id));
    }
  };

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
      {
        authorizationStatus === AuthorizationStatus.Auth ?
          <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>
          : ''
      }
    </div>
  );
}

export default FilmControl;
