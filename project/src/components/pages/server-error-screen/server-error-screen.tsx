import { Link } from 'react-router-dom';

function ServerErrorScreen(): JSX.Element {
  return (
    <section className="user-page">
      <h1 style={{ margin: '64px auto' }}>500. Server is not available</h1>
      <Link to="/" className="user-block__link" style={{ margin: '32px auto' }}>Вернуться на главную</Link>
    </section>
  );
}

export default ServerErrorScreen;
