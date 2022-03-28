const loadingContainerStyle = {
  minHeight: '100vh',
  backgroundColor: '#180202',
  color: '#dfcf77',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const loadingTextStyle = {
  display: 'block',
};

function LoadingScreen(): JSX.Element {
  return (
    <div style={loadingContainerStyle}>
      <h1 style={loadingTextStyle}>Loading...</h1>
    </div>
  );
}

export default LoadingScreen;
