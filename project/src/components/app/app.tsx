import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

import MainScreen from '../pages/main-screen/main-screen';
import AddReviewScreen from '../pages/add-review-screen/add-review-screen';
import MovieScreen from '../pages/movie-screen/movie-screen';
import MyListScreen from '../pages/my-list-screen/my-list-screen';
import PlayerScreen from '../pages/player-screen/player-screen';
import SignInScreen from '../pages/sign-in-screen/sign-in-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen />} />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute >
              <AddReviewScreen />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film} element={<MovieScreen />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute >
              <MyListScreen />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Player} element={<PlayerScreen />} />
        <Route path={AppRoute.SignIn} element={<SignInScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
