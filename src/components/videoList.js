import React from 'react';
import VideoItem from './videoItem';

const VideoList = (props) =>{
 const videos = props.videos.map((video,key)=>{
   return <VideoItem video={video} onSelected={props.onSelected} key={key}/>
 })
  return(
    <ul className="col-md-4 list-group ">
      {videos}
    </ul>
  )
}

export default VideoList;
