import { Component } from "react";
import NewsCard from "./NewsCard";
import Shimmer from "./Shimmer";
import search from "../../utils/darkModeIcon/search.png";

class Body extends Component {
  constructor() {
    super();
    // console.log("constructor");
    this.state = {
      cardData: null,
      filteredData: null,
      searchText: "",
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
        filteredData: json.results,
      });
    } catch (error) {
      console.log("Error");
    }
    // console.log("component did mount");
  }

  render() {
    // console.log("render");
    const { cardData, filteredData, searchText } = this.state;
    // console.log(cardData);
    return filteredData === null ? (
      <Shimmer />
    ) : (
      <div className="mt-8 flex flex-col justify-center items-center">
        <div className="flex justify-between ">
          <div className="mx-9">
            <input
              type="text"
              onChange={(e) => {
                // console.log(e.target.value);
                this.setState({
                  searchText: e.target.value,
                });
              }}
              value={searchText}
            />
            {/* {console.log(this.state.searchText)} */}
            <button
              className="mx-4"
              onClick={() => {
                let filter = cardData.filter((data) =>
                  // (data) => console.log(data.title)
                  data.title.toLowerCase().includes(searchText.toLowerCase())
                );

                console.log(filter);
                this.setState({
                  filteredData: filter,
                });
                this.setState({
                  searchText: "",
                });
              }}
            >
              <img className="w-[23px]" src={search} />
            </button>
          </div>
          <h2 className="text-center text-white font-black bg-slate-400 w-[220px] rounded-lg">
            Today's 10 Tech News 📰
          </h2>
        </div>

        <div className="flex flex-wrap justify-center">
          {/* {console.log(cardData)} */}
          {filteredData.map((card) => (
            <NewsCard data={card} key={card.article_id} />
          ))}
        </div>
      </div>
    );
  }
}
export default Body;
