import React from 'react';
import VideoListItem from './video_list_item';
import styles from './style.css'

const VideoList = (props) => {
  console.log(props);
  const videoItems = props.videos.map((video) => {
    return <VideoListItem video={video} key={video.etag} onVideoSelect={props.onVideoSelect} />
  })

  return (
    <div className={styles.ul_youtube}>
      <ul>
      {videoItems}
      </ul>
    </div>
    )
}

export default VideoList;
