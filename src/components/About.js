import { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="bg-slate-300 m-[3rem] p-10  rounded-2xl flex justify-center">
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-center my-3 text-xl">About 10T News</h1>
          <h3 className="my-3">
            This News App has been created by{" "}
            <Link to="https://linkedin.com/in/rahulkumarpahwa">
              <b className="underline"> Rahul Kumar</b>
            </Link>{" "}
            as a part of learning Frontend development with React.js using{" "}
            <b> Class Based Components </b> and designed using the{" "}
            <b>TailwindCSS</b>.
          </h3>

          <h2 className="my-3 font-bold">This App has following features :</h2>
          <ul className="list-disc ">
            <li>You can search any keyword from news description.</li>
            <li>You can click on "Know More" to know more about the .</li>
            <li>You can see the ShimmerUI when you open the page.</li>
            <li>
              You can go to About page and also to the original article of the
              page.
            </li>
          </ul>
          <h2 className="my-3 font-bold">Technologies used :</h2>
          <ul className="list-disc">
            <li>React.js</li>
            <li>React Class Based Components</li>
            <li>React Component Life Cycle Method</li>
            <li>React Router Dom</li>
            <li>Parcel</li>
            <li>Fetch()</li>
            <li>JavaScript</li>
            <li>JSX</li>
            <li>TailwindCSS</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default About;
