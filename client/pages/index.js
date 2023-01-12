import axios from "axios";

const Landing = ({ currentUser }) => {
  console.log(currentUser);
  // axios.get("/api/users/currentuser").catch((err) => {
  //   console.log(err.message);
  // });

  return <h1>Landing Page</h1>;
};

Landing.getInitialProps = async () => {
  if (typeof window === "undefined") {
    // we are on the server!
    // request should be made to http://ingress-nginx-controller.ingress-nginx.svc.cluster.local
    const { data } = await axios.get(
      "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser",
      {
        headers: {
          Host: "ticketing.dev",
        },
      }
    );

    return data;
  } else {
    // we are on the browser!
    // request can be made with a base url of ''
    const { data } = await axios.get("/api/users/currentuser");

    return data;
  }

  return {};
};

export default Landing;
