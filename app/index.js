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
      videos: []};
    YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
      this.setState({videos: data});
    });
  }
  render() {
    return(
      <div>
        <h1 className="main_header">Mini YouTube</h1>
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
      )
  }
}
ReactDOM.render(<App />, document.getElementById('container'));
