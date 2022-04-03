import { Link, useParams } from 'react-router-dom';
import Logo from '../../logo/logo';
import UserBlock from '../../user-block/user-block';
import ReviewForm from './review-form/review-form';
import { useAppSelector } from '../../../hooks';
import { getFilms } from '../../../store/selectors';


function AddReviewScreen(): JSX.Element {
  const {id} = useParams<{id: string}>();
  const films = useAppSelector(getFilms);
  const film = films[Number(id) - 1];

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${film.id}`} className="breadcrumbs__link">
                  {film.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`/films/${film.id}/review`} className="breadcrumbs__link">
                  Add review
                </Link>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm />
      </div>

    </section>
  );
}

export default AddReviewScreen;
