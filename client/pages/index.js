import axios from "axios";

const Landing = ({ currentUser }) => {
  // console.log(currentUser);
  // axios.get("/api/users/currentuser").catch((err) => {
  //   console.log(err.message);
  // });

  return <h1>Landing Page</h1>;
};

Landing.getInitialProps = async () => {
  if (typeof window === "undefined") {
    // we are on the server!
    // request should be made to http://ingress-nginx-controller.ingress-nginx.svc.cluster.local
  } else {
    // we are on the browser!
    // request can be made with a base url of ''
  }

  return {};
};

export default Landing;
