import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import TabsContent from './tabs-content/tabs-content';
import { REVIEWS } from '../../../../mocks/reviews';
import { Film } from '../../../../types/films';

// type TABS = 'Overview' | 'Details' | 'Reviews';
type TABS = string;

type TabsProps = {
  activeTab: TABS;
  film: Film;
  onClickHandler: (evt: MouseEvent) => void;
}

function Tabs({activeTab, film, onClickHandler}: TabsProps): JSX.Element {
  return (
    <div className="film-card__desc">
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

      <TabsContent activeTab={activeTab} film={film} reviews={REVIEWS} />
    </div>
  );
}

export default Tabs;
export type { TABS };
