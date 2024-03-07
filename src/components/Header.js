import { Component } from "react";

class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="p-4 flex justify-between items-center shadow-lg  bg-slate-300">
        <h1>NEWS APP</h1>
        <div>
          <ul className="flex">
            <li className="mx-4">Home</li>
            <li className="mx-4">About</li>
            <li className="mx-4">Online Status</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
