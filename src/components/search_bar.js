import React, { Component } from "react";

//Search bar is a class component
class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          className="search-br"
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default Searchbar;
