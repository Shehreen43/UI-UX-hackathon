"use client";
import { useState } from "react";

// Define the Comment type
interface Comment {
  _id: string;
  text: string;
  user: string;
  createdAt: string;
}

const CommentSection = ({ productId, comments }: { productId: string, comments: Comment[] }) => {
  const [newComment, setNewComment] = useState("");
  const [showCommentForm, setShowCommentForm] = useState(false);

  const handleAddComment = async () => {
    if (!newComment) return;

    try {
      await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, comment: newComment }),
      });

      setNewComment("");
      setShowCommentForm(false);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h2>

      {comments.length === 0 ? (
        <p className="text-gray-600">No comments yet. Be the first to comment!</p>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment._id} className="border-b pb-4">
              <p className="text-lg font-medium text-gray-800">{comment.text}</p>
              <span className="text-sm text-gray-500">By: {comment.user}</span>
              <br />
              <small className="text-xs text-gray-400">{new Date(comment.createdAt).toLocaleString()}</small>
            </div>
          ))}
        </div>
      )}

      {!showCommentForm && (
        <button
          onClick={() => setShowCommentForm(true)}
          className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add a Comment
        </button>
      )}

      {showCommentForm && (
        <div className="mt-6 space-y-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
          <div className="flex gap-4">
            <button
              onClick={handleAddComment}
              className="px-6 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition duration-300"
            >
              Submit
            </button>
            <button
              onClick={() => setShowCommentForm(false)}
              className="px-6 py-2 bg-gray-300 text-gray-700 font-bold rounded-md hover:bg-gray-400 transition duration-300"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
