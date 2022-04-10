import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import HistoryRoute from '../history-route/history-route';
import browserHistory from '../../browser-history';

import MainScreen from '../pages/main-screen/main-screen';
import AddReviewScreen from '../pages/add-review-screen/add-review-screen';
import MovieScreen from '../pages/movie-screen/movie-screen';
import MyListScreen from '../pages/my-list-screen/my-list-screen';
import PlayerScreen from '../pages/player-screen/player-screen';
import SignInScreen from '../pages/sign-in-screen/sign-in-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import ServerErrorScreen from '../pages/server-error-screen/server-error-screen';

function App(): JSX.Element {
  return (
    <HistoryRoute history={browserHistory}>
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
        <Route path={AppRoute.ServerError} element={<ServerErrorScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </HistoryRoute>
  );
}

export default App;
