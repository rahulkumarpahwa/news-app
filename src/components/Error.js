import { Component } from "react";
import { Link } from "react-router-dom";

class Error extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="flex m-5 p-4 justify-center bg-slate-300 rounded-2xl">
        <div className="p-10">
          <h1 className="text-7xl font-bold my-4">OOPS!!</h1>
          <h2 className="text-7xl font-bold my-4">Something went Wrong.</h2>

          <Link to="/" className="bg-slate-400 p-2 mt-[50px] rounded-lg">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }
}

export default Error;
