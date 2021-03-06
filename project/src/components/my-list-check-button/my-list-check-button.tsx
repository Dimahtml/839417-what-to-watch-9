type MyListCheckButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function MyListCheckButton({onClick}: MyListCheckButtonProps): JSX.Element {
  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={onClick}
    >
      <svg viewBox="0 0 18 14" width="18" height="14">
        <use xlinkHref="#in-list"></use>
      </svg>
      <span>My list</span>
    </button>
  );
}

export default MyListCheckButton;
