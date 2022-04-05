import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks';
import { Film } from '../../../../types/films';
import { getAuthorizationStatus } from '../../../../store/selectors';
import { AppRoute, AuthorizationStatus } from '../../../../const';
import { addFilmToFavoriteAction, removeFilmFromFavoriteAction } from '../../../../store/api-actions';
import { store } from '../../../../store';
import MyListPlusButton from '../../../my-list-plus-button/my-list-plus-button';
import MyListCheckButton from '../../../my-list-check-button/my-list-check-button';

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

  const onMyListPlusButtonClick = () => {
    if (film) {
      store.dispatch(addFilmToFavoriteAction(film));
      film.isFavorite = true;
    }
  };

  const onMyListCheckButtonClick = () => {
    if (film) {
      store.dispatch(removeFilmFromFavoriteAction(film));
      film.isFavorite = false;
    }
  };

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
      {
        film?.isFavorite === true ?
          <MyListCheckButton onClick={onMyListCheckButtonClick} /> :
          <MyListPlusButton onClick={onMyListPlusButtonClick} />
      }
      {
        authorizationStatus === AuthorizationStatus.Auth ?
          <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>
          : ''
      }
    </div>
  );
}

export default FilmControl;
