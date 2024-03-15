import { Component } from "react";
import { Link } from "react-router-dom";

class Error extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="flex flex-col justify-center items-center">
        <h1>OOPS!!</h1>
        <h2>Something went Wrong!!</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }
}

export default Error;