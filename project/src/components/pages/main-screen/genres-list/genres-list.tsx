import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { changeGenre } from '../../../../store/cinema-data/cinema-data';
import { getActiveGenre, getFilmsGenres } from '../../../../store/selectors';

function GenresList(): JSX.Element {
  const genre = useAppSelector(getActiveGenre);
  const dispatch = useAppDispatch();
  const uniqueGenres: Array<string> = useAppSelector(getFilmsGenres);

  return (
    <ul className="catalog__genres-list">
      {uniqueGenres.map((genreItem) =>
        (
          <li
            className={genreItem === genre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}
            key={genreItem}
            onClick={() => {
              dispatch(changeGenre(genreItem));
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
