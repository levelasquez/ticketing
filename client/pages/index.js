const Landing = ({ currentUser }) => {
  return currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>You are NOT signed in</h1>
  );
};

Landing.getInitialProps = async (context, client, currentUser) => {
  return {};
};

export default Landing;
