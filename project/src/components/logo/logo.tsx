import {Link} from 'react-router-dom';

type LogoProps = {
  isDisabled?: boolean;
};

function Logo({isDisabled=false}: LogoProps): JSX.Element {
  if (isDisabled) {
    return (
      <div className="logo">
        <div className="logo__link" >
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </div>
      </div>
    );
  }

  return (
    <div className="logo">
      <Link to="/" className="logo__link" >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
