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

          {Object.values(TabTitle).map((title: TabTitle) =>
            (
              <li
                className={`film-nav__item ${activeTab === title ? 'film-nav__item--active' : ''}`}
                key={title}
              >
                <Link to="" className="film-nav__link" onClick={() => onClickHandler(title)} >
                  {title}
                </Link>
              </li>
            ),
          )}
        </ul>
      </nav>

      <TabsContent activeTab={activeTab} film={film} reviews={REVIEWS} />
    </div>
  );
}

export default Tabs;
