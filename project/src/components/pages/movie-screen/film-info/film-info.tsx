import { useState, MouseEvent } from 'react';
import Tabs from './tabs/tabs';
import { Film } from '../../../../types/films';
import { TABS } from './tabs/tabs';

type FilmInfoProps = {
  film: Film;
};

function FilmInfo({ film }: FilmInfoProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeTab, setActiveTab] = useState<TABS>('Overview');

  const onClickHandler = (evt: MouseEvent): void => {
    const target = evt.target as HTMLElement;
    // eslint-disable-next-line no-console
    console.log(evt);
    // eslint-disable-next-line no-console
    console.log(target.textContent);
    if (target.textContent) {
      setActiveTab(target.textContent);
    }
  };

  return (
    <div className="film-card__desc">
      <Tabs activeTab={activeTab} film={film} onClickHandler={onClickHandler} />
    </div>
  );
}

export default FilmInfo;
