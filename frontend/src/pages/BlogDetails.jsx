import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SoloAlert from "soloalert";

const BlogDetails = ({ blogs, setBlogs }) => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));
  const [comments, setComments] = useState(blog.comments || []);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");

  const handleLike = () => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((b) =>
        b.id === blog.id ? { ...b, likes: b.likes + 1 } : b
      )
    );
    SoloAlert.alert({
      title: "Liked!",
      body: "You liked this post.",
      icon: "success",
      theme: "light",
    });
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (username.trim() === "" || newComment.trim() === "") {
      SoloAlert.alert({
        title: "Error",
        body: "Please provide your name and comment.",
        icon: "error",
        theme: "dark",
      });
      return;
    }

    const newCommentData = { username, text: newComment };
    setComments((prev) => [...prev, newCommentData]);
    setNewComment("");
    setUsername("");

    SoloAlert.alert({
      title: "Success",
      body: "Comment added successfully.",
      icon: "success",
      theme: "dark",
    });
  };

  if (!blog) {
    return (
      <div className="bg-gray-900 text-gray-300 min-h-screen flex items-center justify-center">
        <p className="text-xl text-white">Blog not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen p-8 lg:p-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center lg:text-left  font-mono">
          {blog.title}
        </h1>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
        />
        <p className="text-lg leading-relaxed mb-8">{blog.content}</p>
        <p className="text-sm text-gray-500 italic mb-8">
          Category: <span className="text-indigo-400">{blog.category}</span>
        </p>
        <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
          <button
            onClick={handleLike}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg shadow-lg text-lg font-semibold"
          >
            Like ({blog.likes})
          </button>
        </div>
        <hr className="border-gray-700 my-8" />
        <h2 className="text-3xl font-bold text-white mb-6 font-mono">Comments</h2>
        <ul className="space-y-6">
          {comments.map((comment, index) => (
            <li
              key={index}
              className="bg-gray-800 text-gray-300 p-4 rounded-lg shadow-md"
            >
              <p className="font-semibold text-indigo-400">
                {comment.username}
              </p>
              <p className="text-gray-300">{comment.text}</p>
            </li>
          ))}
        </ul>
        <form onSubmit={handleAddComment} className="mt-8 space-y-6">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your Name"
            className="w-full p-4 bg-gray-800 text-gray-300 border border-gray-700 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-600 text-lg"
            required
          />
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full p-4 bg-gray-800 text-gray-300 border border-gray-700 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-600 text-lg"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg shadow-lg text-lg font-semibold"
          >
            Add Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogDetails;
