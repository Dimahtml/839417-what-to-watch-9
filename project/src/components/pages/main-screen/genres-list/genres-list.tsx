import { Films } from '../../../../types/films';
import { FilmGenre } from '../../../../const';

type GenresListProps = {
  films: Films;
}

function GenresList({films}: GenresListProps): JSX.Element {
  const genres = films.map((film) => film.genre);
  const uniqueGenres = [FilmGenre.AllGenres, ...new Set(genres)];

  return (
    <ul className="catalog__genres-list">

      {/* Позже добавить этот класс активному элементу списка */}
      {/* catalog__genres-item--active */}

      {uniqueGenres.map((genre) =>
        (
          <li
            className={'catalog__genres-item'}
            key={genre}
          >
            <a href="/" className="catalog__genres-link">{genre}</a>
          </li>
        ),
      )}
    </ul>
  );
}

export default GenresList;
