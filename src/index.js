import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import youtubeApiSearch from "youtube-api-search";
import Searchbar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_details";

const API_KEY = "AIzaSyBYgFwAznOmzrYg104GIouB50eeZWdvDAs";

// Class component are used when we want to have a concept of state.
class App extends Component {
  constructor(props) {
    super(props);

    // constructor is initialized once an instance of app is created.
    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch("How to make lasagna");
  }

  // video search function with an argument of term.
  videoSearch(term) {
    youtubeApiSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({ videos: videos, selectedVideo: videos[0] });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <Searchbar onSearchTermChange={(term) => this.videoSearch(term)} />
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
