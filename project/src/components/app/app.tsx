import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

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
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen />} />
        <Route path={AppRoute.AddReview} element={<AddReviewScreen />} />
        <Route path={AppRoute.Film} element={<MovieScreen />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyListScreen />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Player} element={<PlayerScreen />} />
        <Route path={AppRoute.SignIn} element={<SignInScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
