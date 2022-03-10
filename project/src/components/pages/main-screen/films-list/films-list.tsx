import { Film, Films } from '../../../../mocks/films';
import FilmCard from './film-card/film-card';

type FilmsListProps = {
  films: Films;
};

function FilmsList({films}: FilmsListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film: Film) => <FilmCard film={film} key={film.id}/>)}
    </div>
  );
}

export default FilmsList;
