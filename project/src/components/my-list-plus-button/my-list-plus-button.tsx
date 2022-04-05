type MyListPlusButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function MyListPlusButton({onClick}: MyListPlusButtonProps): JSX.Element {
  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={onClick}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
    </button>
  );
}

export default MyListPlusButton;
