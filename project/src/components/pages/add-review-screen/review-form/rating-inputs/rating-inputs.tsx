import React, { ChangeEvent } from 'react';

type RatingInputsProps = {
  onRatingChange: (value: number) => void;
  maxRating: number;
  initialRating: number;
}

function RatingInputs({onRatingChange, maxRating, initialRating}: RatingInputsProps): JSX.Element {

  const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => onRatingChange(Number(evt.target.value));

  return (
    <div className="rating__stars">
      {
        Array.from({length: maxRating}).map((_, index, arr) => {
          const currentId = arr.length - index;
          return (
            <React.Fragment key={currentId}>
              <input
                className="rating__input"
                id={currentId.toString()}
                type="radio"
                name="rating"
                value={currentId}
                onChange={onChangeHandler}
                checked={currentId === initialRating}
              />
              <label className="rating__label" htmlFor={String(currentId)} >
                Rating {currentId}
              </label>
            </React.Fragment>
          );
        })
      }
    </div>
  );
}

export default RatingInputs;
