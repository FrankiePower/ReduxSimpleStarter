import React, { Component } from "react";
import ReactDOM from "react-dom";
import youtubeApiSearch from "youtube-api-search";
import Searchbar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_details";

const API_KEY = "AIzaSyBYgFwAznOmzrYg104GIouB50eeZWdvDAs";

// Create a new component. This component should produce some HTML

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    youtubeApiSearch(
      { key: API_KEY, term: "How to make a Shawarma" },
      (videos) => {
        this.setState({ videos: videos, selectedVideo: videos[0] });
      }
    );
  }
  render() {
    return (
      <div>
        <Searchbar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

// Take thus component's generated and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
