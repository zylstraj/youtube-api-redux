import React from 'react';
import styles from './style.css';

const VideoDetail = ({video}) => {
  if(!video) {
    return <div>Loading...</div>
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
  <div className="video_detail">
    <div className={styles.video_detail_1}>
    <iframe className="videodt_iframe" src={url} frameborder="0" allowfullscreen></iframe>
    </div>
    <div className="video_detail_2">
      <div>{video.snippet.title}</div>
      <div>{video.snippet.description}</div>
    </div>
  </div>
    )
}
export default VideoDetail;
