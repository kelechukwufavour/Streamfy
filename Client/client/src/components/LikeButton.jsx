import { useState, useEffect } from 'react';
import { toggleLike, fetchLikes } from '../services/api';
import { FaHeart } from 'react-icons/fa'; // Ensure the package is installed

const LikeButton = ({ videoId, userId }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [clickCount, setClickCount] = useState(0); // State to track the number of clicks

  useEffect(() => {
    const loadLikes = async () => {
      try {
        const response = await fetchLikes(videoId);
        setLikes(response.data.likes);
        setLiked(response.data.userHasLiked);
      } catch (error) {
        console.error('Error fetching likes:', error);
      }
    };

    loadLikes();
  }, [videoId]);

  const handleLikeToggle = async () => {
    setLoading(true);
    setClickCount(clickCount + 1); // Increment the click count

    try {
      // Optimistically update the UI
      const newLikes = liked ? likes - 1 : likes + 1;
      setLikes(newLikes);
      setLiked(!liked);

      const response = await toggleLike(videoId, userId);
      // Sync with the server response
      setLikes(response.data.likes);
      setLiked(response.data.userHasLiked);
    } catch (error) {
      console.error('Error toggling like:', error);
      // Rollback UI update on error
      const rollbackLikes = liked ? likes + 1 : likes - 1;
      setLikes(rollbackLikes);
      setLiked(liked);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleLikeToggle} disabled={loading} style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
        {liked ? <FaHeart color="red" /> : <FaHeart />}
        <span style={{ position: 'absolute', right: '-10px', fontSize: '0.8rem', color: 'black' }}>{likes}</span>
      </button>
      {/* Hide or remove this paragraph if not needed */}
      <p style={{ display: 'none' }}>Like button clicked {clickCount} times</p>
    </div>
  );
};

export default LikeButton;
