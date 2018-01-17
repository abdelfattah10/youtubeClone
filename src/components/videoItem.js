import React from 'react';

const VideoItem = ({video, onSelected}) =>{
  const imgURL = video.snippet.thumbnails.default.url;
  return(
    <li className="list-group-item" onClick={() => onSelected(video) }>
     <div className="video-list media">
      <div className="media-left">
        <img className="media-object" src={imgURL} alt="Video-Img"/>
      </div>
      <div className="media-body">
       <div className="media-heading">{video.snippet.title}</div>
      </div>
     </div>
    </li>
  )
}

export default VideoItem;
