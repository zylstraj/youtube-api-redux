import React from 'react';
import VideoListItem from './video_list_item';
import styles from './style.css'

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem video={video} key={video.etag} onVideoSelect={props.onVideoSelect} />
  })

  return (
    <ul className="ul_youtube">
    {videoItems}
    </ul>
    )
}

export default VideoList;
