import {Link} from 'react-router-dom';

type LogoProps = {
  isDisabled?: boolean;
  isCentered?: boolean;
};

function Logo({isDisabled=false, isCentered=false}: LogoProps): JSX.Element {
  return (
    <div className="logo">
      {isDisabled
        ?
        <div className={isCentered ? 'logo__link logo__link--light' : 'logo__link'} >
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </div>
        :
        <Link to={isDisabled ? '' : '/'} className={isCentered ? 'logo__link logo__link--light' : 'logo__link'} >
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>}
    </div>
  );
}

export default Logo;
