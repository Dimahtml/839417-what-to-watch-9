import { useRef, useEffect, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../hooks';
import { setErrorAction, clearErrorAction, loginAction } from '../../../store/api-actions';
import { AuthData } from '../../../types/auth-data';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { getAuthorizationStatus } from '../../../store/selectors';
import { validatePassword } from '../../../utils';
import PageFooter from '../../page-footer/page-footer';
import Logo from '../../logo/logo';

function SignInScreen(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (passwordRef.current !== null && !validatePassword(passwordRef.current.value)) {
      dispatch(setErrorAction('Password must contain at least one letter and one number'));
    }

    if (loginRef.current !== null && passwordRef.current !== null && validatePassword(passwordRef.current.value)) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch(clearErrorAction);
    }
  };

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Main);
    }
  });

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={loginRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
      <PageFooter />
    </div>
  );
}

export default SignInScreen;
