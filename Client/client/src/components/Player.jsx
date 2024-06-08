
import CommentList from './CommentList';
import AddComment from './AddComment';
import LikeButton from './LikeButton';

import '../styles/styles.css';

const Player = () => {
  return (
    <div className="App">

        <h1>Coding Lessons</h1>
        <p>Coding like A B C</p>
        <div className="video-container">
          <video controls muted autoPlay width="560" height="315">
            <source src="./src/assets/sample.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <LikeButton videoId="local-video" />
        <CommentList videoId="local-video" />
        <AddComment videoId="local-video" />
      
    </div>
  );
};

export default Player;
