import { Link } from 'react-router-dom';
import TabsContent from './tabs-content/tabs-content';
import { REVIEWS } from '../../../../mocks/reviews';
import { Film } from '../../../../types/films';
import { TabTitle } from '../../../../const';

type TabsProps = {
  activeTab: TabTitle;
  film: Film;
  onClickHandler: (value: TabTitle) => void;
}

function Tabs({activeTab, film, onClickHandler}: TabsProps): JSX.Element {
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${activeTab === 'Overview' ? 'film-nav__item--active' : ''}`}>
            <Link
              to=""
              className="film-nav__link"
              onClick={() => onClickHandler(TabTitle.Overview)}
            >
              Overview
            </Link>
          </li>
          <li className={`film-nav__item ${activeTab === 'Details' ? 'film-nav__item--active' : ''}`}>
            <Link
              to=""
              className="film-nav__link"
              onClick={() => onClickHandler(TabTitle.Details)}
            >
              Details
            </Link>
          </li>
          <li className={`film-nav__item ${activeTab === 'Reviews' ? 'film-nav__item--active' : ''}`}>
            <Link
              to=""
              className="film-nav__link"
              onClick={() => onClickHandler(TabTitle.Reviews)}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </nav>

      <TabsContent activeTab={activeTab} film={film} reviews={REVIEWS} />
    </div>
  );
}

export default Tabs;
