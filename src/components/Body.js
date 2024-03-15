import { Component } from "react";
import NewsCard from "./NewsCard";
import Shimmer from "./Shimmer";

class Body extends Component {
  constructor() {
    super();
    // console.log("constructor");
    this.state = {
      cardData: null,
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch(
        "https://newsdata.io/api/1/news?apikey=pub_396338e257e5e07e25a943fa428b8bb1b89d4&country=us&category=technology,science&image=1"
      );
      const json = await data.json();
      // console.log(json);
      this.setState({
        cardData: json.results,
      });
    } catch (error) {
      console.log("Error");
    }
    // console.log("component did mount");
  }

  render() {
    // console.log("render");
    const { cardData } = this.state;
    // console.log(cardData);
    return cardData === null ? (
      <Shimmer />
    ) : (
      <div className="mt-8 flex flex-col justify-center items-center">
        <h2 className="text-center text-stone-500 font-black bg-slate-400 w-[220px] rounded-lg">
          Today's 10 Tech News 📰
        </h2>
        <div className="flex flex-wrap justify-center">
          {console.log(cardData)}
          {cardData.map((card) => (
            <NewsCard data={card} key={card.article_id} />
          ))}
        </div>
      </div>
    );
  }
}
export default Body;
