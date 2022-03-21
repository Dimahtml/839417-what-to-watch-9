import { Link } from 'react-router-dom';
import { Films } from '../../../../types/films';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { changeGenre, getActiveFilms } from '../../../../store/action';

type GenresListProps = {
  films: Films;
}

function GenresList({films}: GenresListProps): JSX.Element {
  const genre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();

  const genres: Array<string> = films.map((film) => film.genre);
  const uniqueGenres: Array<string> = ['All genres', ...new Set(genres)];

  return (
    <ul className="catalog__genres-list">
      {uniqueGenres.map((genreItem) =>
        (
          <li
            className={genreItem === genre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}
            key={genreItem}
            onClick={() => {
              dispatch(changeGenre(genreItem));
              dispatch(getActiveFilms());
            }}
          >
            <Link to={`#${genreItem}`} className="catalog__genres-link">{genreItem}</Link>
          </li>
        ),
      )}
    </ul>
  );
}

export default GenresList;
