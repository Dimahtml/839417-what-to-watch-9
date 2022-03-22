import { Reviews as TypeReviews } from '../../../../../../types/reviews';
import FilmReview from './film-review/film-review';

type ReviewProps = {
  reviews: TypeReviews;
}

function ReviewsList({reviews}: ReviewProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.slice(0, reviews.length / 2).map((review) => (
          <FilmReview review={review} key={review.id}/>
        ))}
      </div>
      <div className="film-card__reviews-col">
        {reviews.slice(reviews.length / 2, reviews.length).map((review) => (
          <FilmReview review={review} key={review.id}/>
        ))}
      </div>
    </div>
  );
}

export default ReviewsList;
