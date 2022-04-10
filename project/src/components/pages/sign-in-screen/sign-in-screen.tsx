import { useRef, useEffect, useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../hooks';
import { loginAction } from '../../../store/api-actions';
import { AuthData } from '../../../types/auth-data';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { getAuthorizationStatus } from '../../../store/selectors';
import { isPasswordValid, isLoginValid } from '../../../utils';
import PageFooter from '../../page-footer/page-footer';
import Logo from '../../logo/logo';

function SignInScreen(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();

  const [loginCorrect, setLoginCorrect] = useState(true);
  const [passwordCorrect, setPasswordCorrect] = useState(true);

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleLoginInputChange = () => {
    if (loginRef.current !== null && isLoginValid(loginRef.current.value)) {
      setLoginCorrect(true);
    }
  };

  const handlePasswordInputChange = () => {
    if (passwordRef.current !== null && isPasswordValid(passwordRef.current.value)) {
      setPasswordCorrect(true);
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && !isLoginValid(loginRef.current.value)) {
      setLoginCorrect(false);
    }
    if (passwordRef.current !== null && !isPasswordValid(passwordRef.current.value)) {
      setPasswordCorrect(false);
    }
    if (
      loginRef.current !== null
      && passwordRef.current !== null
      && isPasswordValid(passwordRef.current.value)
      && loginCorrect
    ) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
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
          {
            !loginCorrect && (
              <div className="sign-in__message">
                <p>Please enter a valid email address</p>
              </div>
            )
          }

          {
            !passwordCorrect && (
              <div className="sign-in__message">
                <p>Password must contain at least one letter and one number</p>
              </div>
            )
          }

          <div className="sign-in__fields">
            <div className={loginCorrect ? 'sign-in__field' : 'sign-in__field--error'}>
              <input
                ref={loginRef}
                onChange={handleLoginInputChange}
                autoComplete={'off'}
                className="sign-in__input"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                type="email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={passwordCorrect ? 'sign-in__field' : 'sign-in__field--error'}>
              <input
                ref={passwordRef}
                onChange={handlePasswordInputChange}
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
