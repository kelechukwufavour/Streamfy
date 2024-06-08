import { useState } from 'react';
import { postComment } from '../services/api';

const AddComment = ({ videoId, onCommentAdded }) => {
  const [commentText, setCommentText] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const newComment = { text: commentText, author };
      await postComment(videoId, newComment);
      setCommentText('');
      setAuthor('');
      onCommentAdded(newComment); // Notify the parent component of the new comment
    } catch (err) {
      setError('Failed to post comment. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="author">Name:</label>
        <input
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Your name"
          required
        />
      </div>
      <div>
        <label htmlFor="comment">Add a comment:</label>
        <textarea
          id="comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add a comment"
          required
        />
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Posting...' : 'Post Comment'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default AddComment;