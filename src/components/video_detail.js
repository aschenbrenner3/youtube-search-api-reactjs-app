import React from 'react';

const VideoDetail = ({video})=>{
  //option to simplify with es6 = swap (props) with ({video}) - remove line after this 
  //const video = props.video;

  //add check
  if (!video) {
    return <div>Loading...</div>;
  }

  //get access to embed url
  //craft our our video url
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
