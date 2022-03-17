import { Review } from '../../../../../../types/reviews';
import { getFormattedDate, getFormattedDatetime } from '../../../../../../utils';

type FilmReviewProps = {
  review: Review;
}

function FilmReview({review}: FilmReviewProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time
            className="review__date"
            dateTime={getFormattedDatetime(review.date)}
          >
            {getFormattedDate(review.date)}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}

export default FilmReview;
