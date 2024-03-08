import { Component } from "react";

class NewsCard extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="m-4 p-4 bg-slate-100 w-[250px] h-[400px]">
        <img alt="image"></img>
        <h1>Title</h1>
        <p>Description</p>
      </div>
    );
  }
}

export default NewsCard;
