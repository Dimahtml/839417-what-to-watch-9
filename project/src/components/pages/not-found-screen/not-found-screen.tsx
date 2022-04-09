import { Link } from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <section className="user-page">
      <h1 style={{ margin: '64px auto' }}>404. Page not found</h1>
      <Link to="/" className="user-block__link" style={{ margin: '32px auto' }}>Вернуться на главную</Link>
    </section>
  );
}

export default NotFoundScreen;
