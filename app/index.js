import _ from "lodash";
import React from "react";
import ReactDOM from "react-dom";
import YTSearch from 'youtube-api-search';
import VideoList from './components/VideoList/video_list';
import VideoDetail from './components/VideoDetail/video_detail';
import SearchBar from './components/SearchBar/search_bar';
import styles from './style.css';

const API_KEY = 'AIzaSyBs8HechEIQEcpnJLWHwNS_CYLEU5-XROA';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('Chance The Rapper');
  }
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);
    return(
      <div className={styles.main_div}>
        <h1 className={styles.main_header}>Mini You<span>Tube</span></h1>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})} />
      </div>
      )
  }
}
ReactDOM.render(<App />, document.getElementById('container'));
