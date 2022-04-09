import Logo from '../logo/logo';

type PageFooterProps = {
  isDisabledLogo?: boolean;
}

function PageFooter({isDisabledLogo=false}: PageFooterProps): JSX.Element {
  return (
    <footer className="page-footer">
      <Logo isCentered isDisabled={isDisabledLogo} />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default PageFooter;
