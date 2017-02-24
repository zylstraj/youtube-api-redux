import React from 'react';
import styles from './video_list_item.css'

const VideoListItem = (props) => {
  const video = props.video;
  const onVideoSelect = props.onVideoSelect;
  const imageUrl = video.snippet.thumbnails.default.url;
  console.log(video);
  return (
    <li className={styles.fun} onClick={() => onVideoSelect(video)}>
    <img src={imageUrl} />
      <div className={styles.video_snippet}>
      {video.snippet.title}
      </div>
    </li>
    )
}

export default VideoListItem;
