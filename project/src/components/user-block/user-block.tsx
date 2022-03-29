import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../const';

function UserBlock(): JSX.Element {
  const navigate = useNavigate();
  const { authorizationStatus } = useAppSelector((state) => state);
  const onAvatarClickHandler = () => navigate(AppRoute.MyList);

  if (authorizationStatus === AuthorizationStatus.NoAuth) {
    return (
      <div className="user-block">
        <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
      </div>
    );
  }

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar" onClick={onAvatarClickHandler}>
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <Link to="/" className="user-block__link">Sign out</Link>
      </li>
    </ul>
  );
}

export default UserBlock;
