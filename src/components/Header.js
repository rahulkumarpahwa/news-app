import { Component } from "react";
import OnlineStatus from "../../utils/OnlineStatus";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="p-4 flex justify-between items-center shadow-lg  bg-slate-300">
        <div className=" flex items-center justify-center shadow text-white bg-slate-400 rounded-lg">
          <h1 className="text-6xl">10T</h1>{" "}
          <span className="text-xs text-stone-500 font-bold rotate-90">
            News
          </span>
        </div>

        <div>
          <ul className="flex">
            <li className="mx-4 font-bold cursor-pointer">Home</li>
            <li className="mx-4 font-bold cursor-pointer">About</li>
            <li className="mx-4 cursor-pointer">
              <OnlineStatus />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
