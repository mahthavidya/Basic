import React from "react";
import "./footer.css";

class footer extends React.Component {
  render() {
    let ele;
    if (this.props.v1 === true) {
      ele = (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
      );
    } else {
      ele = (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
      );
    }
    return <div className="footer">{ele}</div>;
  }
}

export default footer;
