import { useNavigate } from 'react-router-dom';
import { Film } from '../../../../types/films';
import { AppRoute } from '../../../../const';
import UserBlock from '../../../user-block/user-block';
import Logo from '../../../logo/logo';
import { addFilmToFavoriteAction } from '../../../../store/api-actions';
import { store } from '../../../../store';

type FilmPromoProps = {
  promoFilm: Film | null;
};

function FilmPromo({promoFilm}: FilmPromoProps): JSX.Element {
  const navigate = useNavigate();
  const id  = promoFilm?.id.toString();

  const onPlayerBtnClickHandler = () => {
    if (id) {
      navigate(AppRoute.Player.replace(':id', id));
    }
  };

  const onMyListBtnClickHandler = () => {
    navigate(AppRoute.MyList);
    if (promoFilm) {
      store.dispatch(addFilmToFavoriteAction(promoFilm));
    }
  };

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promoFilm?.backgroundImage} alt={promoFilm?.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo isDisabled />
        <UserBlock />
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            {promoFilm && <img src={promoFilm.posterImage} alt={promoFilm.name} width="218" height="327" />}
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{promoFilm && promoFilm.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promoFilm && promoFilm.genre}</span>
              <span className="film-card__year">{promoFilm && promoFilm.released}</span>
            </p>

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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilmPromo;
