import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
// import { Film } from '../../../../../types/types';

// type TABS = 'Overview' | 'Details' | 'Reviews';
type TABS = string;

type TabsProps = {
  activeTab: TABS;
  onClickHandler: (evt: MouseEvent) => void;
}

function Tabs({activeTab, onClickHandler}: TabsProps): JSX.Element {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className={`film-nav__item ${activeTab === 'Overview' ? 'film-nav__item--active' : ''}`}>
          <Link to="" className="film-nav__link" onClick={onClickHandler} >Overview</Link>
        </li>
        <li className={`film-nav__item ${activeTab === 'Details' ? 'film-nav__item--active' : ''}`}>
          <Link to="" className="film-nav__link" onClick={onClickHandler}>Details</Link>
        </li>
        <li className={`film-nav__item ${activeTab === 'Reviews' ? 'film-nav__item--active' : ''}`}>
          <Link to="" className="film-nav__link" onClick={onClickHandler}>Reviews</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Tabs;
export type { TABS };
