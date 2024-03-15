import { Component } from "react";
import OnlineStatus from "../../utils/OnlineStatus";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="p-4 flex justify-between items-center shadow-lg  bg-slate-300">
        <Link
          to="/"
          className=" flex items-center justify-center shadow text-white bg-slate-400 rounded-lg"
        >
          <h1 className="text-6xl">10T</h1>{" "}
          <span className="text-xs text-stone-500 font-bold rotate-90">
            News
          </span>
        </Link>

        <div>
          <ul className="flex">
            <Link
              to="/"
              className="mx-4 font-bold cursor-pointer hover:text-stone-500"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="mx-4 font-bold cursor-pointer hover:text-stone-500"
            >
              About
            </Link>
            <li className="mx-4 cursor-pointer hover:text-stone-500">
              <OnlineStatus />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
