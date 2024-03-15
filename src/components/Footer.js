import { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="p-4 flex justify-center flex-col items-center shadow-lg  bg-slate-300">
        <Link
          to="/"
          className=" flex items-center justify-center shadow text-white bg-slate-400 rounded-lg"
        >
          <h1 className="text-6xl">10T</h1>{" "}
          <span className="text-xs text-stone-500 font-bold rotate-90">
            News
          </span>
        </Link>

        <div className="mt-4">
          <Link
            to="/"
            className="m-5 font-bold cursor-pointer hover:text-stone-500"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="m-5 font-bold cursor-pointer hover:text-stone-500"
          >
            About
          </Link>
        </div>
        <div className="font-bold mt-2">
          &copy; TenTech News 2024-2025
          <div className="text-center text-xs">All rights reserved.</div>
        </div>
      </div>
    );
  }
}

export default Footer;
