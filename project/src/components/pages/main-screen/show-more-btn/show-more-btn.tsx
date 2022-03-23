type ShowMoreBtnProps = {
  onShowMoreBtnClick: React.MouseEventHandler<HTMLButtonElement>;
};

function ShowMoreBtn({onShowMoreBtnClick}: ShowMoreBtnProps): JSX.Element {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onShowMoreBtnClick}
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMoreBtn;
