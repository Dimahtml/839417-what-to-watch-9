import React, { useState, ChangeEvent } from 'react';
import RatingInputs from './rating-inputs/rating-inputs';

function ReviewForm(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');

  const onTextareaChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => setMessage(evt.target.value);

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <RatingInputs onRatingChange={setRating} />
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
