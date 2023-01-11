import axios from "axios";

const Landing = ({ currentUser }) => {
  console.log(currentUser);
  axios.get("/api/users/currentuser").catch((err) => {
    console.log(err.message);
  });

  return <h1>Landing Page</h1>;
};

// Landing.getInitialProps = async () => {
//   const response = await axios.get("/api/users/currentuser");

//   return response.data;
// };

export default Landing;
