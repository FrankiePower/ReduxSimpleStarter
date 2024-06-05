import React from "react";
import ReactDOM from "react-dom";

import Searchbar from "./components/search_bar";

const API_KEY = "AIzaSyBYgFwAznOmzrYg104GIouB50eeZWdvDAs";

// Create a new component. This component should produce some HTML

const App = () => {
  return (
    <div>
      <Searchbar />
    </div>
  );
};

// Take thus component's generated and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector(".container"));
