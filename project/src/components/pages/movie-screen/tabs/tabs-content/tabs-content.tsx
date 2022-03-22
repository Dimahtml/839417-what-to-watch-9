import React from 'react';
import { Film } from '../../../../../types/films';
import { Reviews as TypeReviews } from '../../../../../types/reviews';
import Overview from './overview/overview';
import Details from './details/details';
import { TabTitle } from '../../../../../const';
import Reviews from './reviews-list/reviews-list';

type TabsContentProps = {
  activeTab: TabTitle;
  film: Film;
  reviews: TypeReviews;
};

function TabsContent({activeTab, film, reviews}: TabsContentProps): JSX.Element {

  if (activeTab === TabTitle.Overview) {
    return (
      <Overview film={film} />
    );

  } else if (activeTab === TabTitle.Details) {
    return (
      <Details film={film} />
    );
  }

  return (
    <Reviews reviews={reviews} />
  );
}

export default TabsContent;
