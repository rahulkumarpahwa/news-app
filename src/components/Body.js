import { Component } from "react";
import NewsCard from "./NewsCard";

class Body extends Component {
  constructor() {
    super();
    console.log("constructor");
  }

  async componentDidMount() {
    console.log("component did mount");
    const data = await fetch("");
  }

  render() {
    console.log("render");
    return (
      <div className="mt-6 flex">
        <h2> News Cards</h2>
        <div className="flex flex-wrap">
          <NewsCard />
        </div>
      </div>
    );
  }
}
export default Body;
