import React from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';
import LikeButton from './LikeButton';

import '../styles/styles.css';

const Player = ({ video, onSelect }) => {
  return (
    <div className="App" onClick={() => onSelect(video)}>
    
      <h1>{video.title}</h1>
      <p>{video.description}</p>
      <div className="video-container">
        {/* Dynamically set the source based on the video prop */}
        <video controls muted autoPlay width="560" height="315">
          <source src={video.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <LikeButton videoId={video.title} />
      <CommentList videoId={video.title} />
      <AddComment videoId={video.title} />
    </div>
  );
};

export default Player;