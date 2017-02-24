import React from 'react';
import styles from './video_detail.css';

const VideoDetail = ({video}) => {
  if(!video) {
    return <div>Loading...</div>
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
  <div className={styles.video_detail}>
    <div className={styles.video_detail_1}>
    <iframe className={styles.videodt_iframe} src={url} frameborder="0" allowfullscreen></iframe>
    </div>
    <div className={styles.video_detail_2}>
      <div className={styles.video_title}>{video.snippet.title}</div>
      <div className={styles.video_description}>{video.snippet.description}</div>
    </div>
  </div>
    )
}
export default VideoDetail;
