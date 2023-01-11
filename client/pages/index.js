const Landing = ({ color }) => {
  console.log("I am in the component", color);

  return <h1>Landing Page</h1>;
};

Landing.getInitialProps = () => {
  console.log("I am on the server!");

  return { color: "red" };
};

export default Landing;
