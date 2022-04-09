import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch } from '../../../../hooks';
import { addReviewAction } from '../../../../store/api-actions';
import { setErrorAction } from '../../../../store/api-actions';
import { MAX_RATING, RATING, MessageLength } from '../../../../const';
import RatingInputs from './rating-inputs/rating-inputs';

function ReviewForm(): JSX.Element {
  const [rating, setRating] = useState(RATING);
  const [message, setMessage] = useState('');
  const [isFormDisable, setIsFormDisable] = useState(false);
  const [messageDirty, setMessageDirty] = useState(false);
  const [messageError, setMessageError] = useState('Message can`t be empty');
  const [isFormValid, setIsFormValid] = useState(false);

  const dispatch = useAppDispatch();
  const { id } = useParams<{id: string}>();

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (rating !== undefined && messageError === '' && id) {
      try {
        setIsFormDisable(true);
        await dispatch(addReviewAction({comment: message, rating, id}));
      } catch {
        dispatch(setErrorAction('ERROR! Form was not submitted'));
      }
    }
  };

  const handleMessage = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(evt.target.value);
    if ((message.length < MessageLength.Min) || (message.length > MessageLength.Max)) {
      setMessageError('Valid message is from 50 to 400 characters');
    } else {
      setMessageError('');
    }
  };

  const handleBlur = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    switch (evt.target.name) {
      case 'review-text':
        setMessageDirty(true);
        break;
    }
  };

  useEffect(() => {
    if (messageError || rating === 0) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [messageError, rating]);

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit} >
      <div className="rating">
        <RatingInputs maxRating={MAX_RATING} rating={rating} onRatingChange={setRating} />
      </div>
      {
        (messageDirty && messageError)
          ? <div style={{color:'red'}}>{messageError}</div>
          : ''
      }
      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          value={message}
          onChange={handleMessage}
          onBlur={handleBlur}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={!isFormValid || isFormDisable}>Post</button>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
