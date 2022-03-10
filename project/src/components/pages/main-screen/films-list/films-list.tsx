import { useState } from 'react';
import { Film, Films } from '../../../../mocks/films';
import FilmCard from './film-card/film-card';

type FilmsListProps = {
  films: Films;
};

function FilmsList({films}: FilmsListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeFilm, setActiveFilm] = useState(null);

  return (
    <div className="catalog__films-list">
      {films.map((film: Film) => <FilmCard film={film} key={film.id}/>)}
    </div>
  );
}

export default FilmsList;
