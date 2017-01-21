import React from 'react';

const VideoListItem = (props) => {
  const video = props.video;
  const imageUrl = video.snippet.thumbnails.default.url;
  console.log(video);
  return (
    <li>
    <img className="fun" src={imageUrl} />
      <div>
      {video.snippet.title}
      </div>
    </li>
    )
}

export default VideoListItem;
