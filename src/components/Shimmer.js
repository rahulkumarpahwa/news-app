import { Component } from "react";

class Shimmer extends Component {
  render() {
    let container = [];

    for (let i = 0; i < 10; i++) {
      container.push(
        <div
          className="m-4 p-4 bg-slate-100 w-[300px] h-[400px] rounded-xl"
          key={i}
        >
          <div className="flex justify-center">
            <div className="h-[150px] w-[280px] rounded-2xl items-centre bg-slate-300"></div>
          </div>
          <div className="my-3 h-10 rounded-lg bg-slate-300"></div>
          <div className="p-1 my-3 h-[100px] rounded-lg bg-slate-300"></div>
          <div className="p-1 my-4 h-10 w-[100px] rounded-lg bg-slate-300"></div>
        </div>
      );
    }
    console.log();

    return (
      <div className="flex flex-wrap justify-center mt-10">{container}</div>
    );
  }
}

export default Shimmer;
