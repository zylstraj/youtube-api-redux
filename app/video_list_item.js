import React from 'react';

const VideoListItem = (props) => {
  const video = props.video;
  const onVideoSelect = props.onVideoSelect;
  const imageUrl = video.snippet.thumbnails.default.url;
  console.log(video);
  return (
    <li onClick={() => onVideoSelect(video)}>
    <img className="fun" src={imageUrl} />
      <div>
      {video.snippet.title}
      </div>
    </li>
    )
}

export default VideoListItem;
