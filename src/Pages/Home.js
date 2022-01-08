import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Body from "../components/Body/Body";
import React from "react";

const Home = (props) => {
  return (
    <React.Fragment>
      <div>Ashish Loves VIDYA - Main Component</div>
      <Header v1={props.data} />
      <Body v1={props.data} />
      <Footer v1={false} />
    </React.Fragment>
  );
};

export default Home;
