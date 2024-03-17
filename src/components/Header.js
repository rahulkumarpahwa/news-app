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

        {/* <div className=" flex justify-centre ml-9">
          <h2 className="text-center text-white font-black bg-slate-400 w-[100px] rounded-lg">
            10 Tech News 📰
          </h2>
        </div> */}

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

            <button
              id="darkbtn"
              className="bg-slate-500 p-1 rounded-2xl flex items-center mx-4 dark:bg-white"
              onClick={() => {
                document.documentElement.classList.toggle("dark");
                const sun = document.querySelector("#sun");
                const moon = document.querySelector("#moon");
                if (document.documentElement.classList.contains("dark")) {
                  moon.classList.add("display-none");
                  sun.classList.remove("display-none");
                } else {
                  sun.classList.add("display-none");
                  moon.classList.remove("display-none");
                }
              }}
            >
              <img src={sun} className="w-[25px] display-none" id="sun" />
              <img src={moon} className="w-[25px] " id="moon" />
            </button>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
