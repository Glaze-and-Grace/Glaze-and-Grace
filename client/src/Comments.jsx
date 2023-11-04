import React, { useState } from 'react';

const Comment = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() === '') {
      return;
    }

    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      <form onSubmit={handleCommentSubmit} className="mb-4">
        <textarea
          className="w-full p-2 border rounded mb-2"
          placeholder="Write your comment..."
          value={newComment}
          onChange={handleCommentChange}
        />
        <button type="submit" className="bg-[#17403C]  text-white py-2 px-4 rounded hover:bg-[#C3CAC3]   ">
          Add Comment
        </button>
      </form>
      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div key={index} className="bg-[#C3CAC3]  border border-[#17403C]  p-4 rounded">
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
};



export default Comment;
