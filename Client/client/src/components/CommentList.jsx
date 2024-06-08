import { useEffect, useState, useMemo } from 'react';
import { fetchComments } from '../services/api';

const CommentList = ({ videoId, newComment }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCommentsMemoized = useMemo(() => {
    return async () => {
      try {
        const response = await fetchComments(videoId);
        setComments(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
  }, [videoId]);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchCommentsMemoized();
  }, [fetchCommentsMemoized]);

  useEffect(() => {
    if (newComment) {
      setComments((prevComments) => [newComment, ...prevComments]);
    }
  }, [newComment]);

  if (loading) {
    return <div>Loading comments...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <p><strong>{comment.author}:</strong> {comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
