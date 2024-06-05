import React from "react";
import ReactDOM from "react-dom";

// Create a new component. This component should produce some HTML
const App = function () {
  return <div>Hi!</div>;
};

// Take thus component's generated and put it on the page (in the DOM)
React.createElement(<App />);
