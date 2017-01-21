import React from "react";
import ReactDOM from "react-dom";
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetail from './video_detail';

const API_KEY = 'AIzaSyBs8HechEIQEcpnJLWHwNS_CYLEU5-XROA';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    YTSearch({key: API_KEY, term: 'Chance The Rapper'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    return(
      <div>
        <h1 className="main_header">Mini YouTube</h1>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})} />
      </div>
      )
  }
}
ReactDOM.render(<App />, document.getElementById('container'));
