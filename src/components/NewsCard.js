import { Component } from "react";

class NewsCard extends Component {
  constructor(props) {
    super(props);
    console.log(props.data);
  }
  render() {
    const { title, link, description, image_url } = this.props.data;
    return (
      <div className="m-4 p-4 bg-slate-100 w-[250px]">
        <img className="" src={image_url} alt="image"></img>
        <h1>{title}</h1>
        <p className="line-clamp-2 hover:line-clamp-none">{description}</p>
        <a
          href={link}
          target="_blank"
          className="p-1 m-3 border border-solid border-black rounded-lg bg-slate-400 "
        >
          Click to see more
        </a>
      </div>
    );
  }
}

export default NewsCard;
