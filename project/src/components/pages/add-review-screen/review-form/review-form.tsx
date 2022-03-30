import { useState, ChangeEvent, FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../../hooks';
import { addReviewAction } from '../../../../store/api-actions';

import RatingInputs from './rating-inputs/rating-inputs';

const MAX_RATING = 10;
const RATING = 8;

function ReviewForm(): JSX.Element {
  const [rating, setRating] = useState(RATING);
  const [message, setMessage] = useState('');

  const dispatch = useAppDispatch();
  const { id } = useParams<{id: string}>();

  const onTextareaChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => setMessage(evt.target.value);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (id) {
      dispatch(addReviewAction({comment: message, rating, id}));
    }
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit} >
      <div className="rating">
        <RatingInputs maxRating={MAX_RATING} rating={rating} onRatingChange={setRating} />
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          value={message}
          onChange={onTextareaChangeHandler}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
