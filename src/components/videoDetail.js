import React from 'react';

const VideoDetail = ({video}) =>{
 if(!video){
   return <div>Loading... </div>
 }
  const ID = video.id.videoId;
  const videoURL = `https://www.youtube.com/embed/${ID}`
  return(
    <div className="video-detail col-md-8">
     <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={videoURL} title="unique"></iframe>
     </div>
     <div className="details">
      <div className="title">{video.snippet.title}</div>
      <div className="desc">{video.snippet.description}</div>
     </div>
    </div>
  )
}

export default VideoDetail;
