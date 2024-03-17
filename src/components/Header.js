import { Component } from "react";
import OnlineStatus from "../../utils/OnlineStatus";
import { Link } from "react-router-dom";
import sun from "../../utils/darkModeIcon/sun.png";
import moon from "../../utils/darkModeIcon/moon.png";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="p-4 flex justify-between items-center shadow-lg  bg-slate-300 dark:bg-slate-600 ">
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
              className="mx-4 font-bold cursor-pointer hover:text-stone-500 dark:text-white dark:hover:text-black"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="mx-4 font-bold cursor-pointer hover:text-stone-500 dark:text-white dark:hover:text-black"
            >
              About
            </Link>
            <li className="mx-4 cursor-pointer hover:text-stone-500 dark:text-white dark:hover:text-black">
              <OnlineStatus />
            </li>

            {/* <img src={sun} className="w-[25px]" id="sun" />
              <img src={moon} className="w-[25px]" id="moon" /> */}

            <button
              id="darkbtn"
              className="bg-black text-white p-1 dark:bg-white dark:text-black rounded-2xl"
              onClick={() => {
                document.documentElement.classList.toggle("dark");
                document.querySelector("#darkbtn").innerText = "darkmode"
                  ? "whitemode"
                  : "darkmode";
              }}
            >
              Dark Mode
            </button>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
