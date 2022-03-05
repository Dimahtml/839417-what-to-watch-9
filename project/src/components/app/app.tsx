import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainScreen from '../main-screen/main-screen';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import MovieScreen from '../movie-screen/movie-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import PlayerScreen from '../player-screen/player-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';

type Film = {
  name: string,
  posterImage: string,
  previewImage: string,
  backgroundImage: string,
  backgroundColor: string,
  description: string,
  rating: number,
  scoresCount: number,
  director: string,
  starring: string[],
  runTime: number,
  genre: string,
  released: number,
  id: number,
  isFavorite: boolean,
  videoLink: string,
  previewVideoLink: string,
}

type AppScreenProps = {
  promoFilm: Film;
  films: Film[];
}

function App({promoFilm, films}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen promoFilm={promoFilm} films={films} />}
        />
      </Routes>
      <Routes>
        <Route
          path={AppRoute.AddReview}
          element={<AddReviewScreen film={promoFilm} />}
        />
      </Routes>
      <Routes>
        <Route
          path={AppRoute.Film}
          element={<MovieScreen film={promoFilm} similarFilms={films} />}
        />
      </Routes>
      <Routes>
        <Route
          path={AppRoute.MyList}
          element={<MyListScreen films={films} />}
        />
      </Routes>
      <Routes>
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen />}
        />
      </Routes>
      <Routes>
        <Route
          path={AppRoute.SignIn}
          element={<SignInScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
