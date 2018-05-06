import React from 'react';
import VideoListItem from './video_list_item';

//props is an argument in a functional component, in a class based component, props are available anywhere as this.props - change any references from props to this.props when upgrading from functional to class component
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect = {props.onVideoSelect}
        key={video.etag}
        video={video} />
      );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
