import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


const Comment = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8080/reaction/getcomment/${30}`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching comments: ', error);
      });
  }, []); 

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() === '') {
      return;
    }

    axios.post(`http://localhost:8080/reaction/addcomment/${30}`, { comment : newComment })
      .then((response) => {
        setComments([...comments, response.data]);
        setNewComment('');
      })
      .catch((error) => {
        console.error('Error adding comment: ', error);
      });
  };

  const handleDeleteComment = (commentId) => {
    axios.delete(`/${commentId}`)
      .then(() => {
        setComments(comments.filter((comment) => comment.id !== commentId));
      })
      .catch((error) => {
        console.error('Error deleting comment: ', error);
      });
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
        <button type="submit" className="bg-[#17403C]  text-white py-2 px-4 rounded hover:bg-[#C3CAC3]">
          Add Comment
        </button>
      </form>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-[#C3CAC3]  border border-[#17403C]  p-4 rounded">
            {comment.text}
            <button
              onClick={() => handleDeleteComment(comment.id)}
              className="text-red-600 hover:underline ml-2 cursor-pointer"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;