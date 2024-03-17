import { Component } from "react";

class NewsCard extends Component {
  constructor(props) {
    super(props);
    // console.log(props.data);
  }
  render() {
    const { title, link, description, image_url } = this.props.data;
    return (
      <div className="m-4 p-4 bg-slate-100 w-[300px] h-[400px] rounded-xl dark:bg-slate-600 dark:text-white">
        <div className="flex justify-center">
          <img
            className="h-[150px] w-[280px] rounded-2xl items-centre"
            src={image_url}
            alt="image"
          ></img>
        </div>
        <h1 className="font-bold my-2 line-clamp-2 ">{title}</h1>
        <p className="line-clamp-4 p-1 my-3">{description}</p>
        <a
          href={link}
          target="_blank"
          className="p-2 my-4 rounded-lg bg-slate-400 font-semibold hover:text-white hover:border-4 border-black "
        >
          Check Full Article
        </a>
      </div>
    );
  }
}

export default NewsCard;
