import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-gray-800 text-gray-300 rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-white truncate">{blog.title}</h3>
        <p className="text-sm text-indigo-400 mb-2">{blog.category}</p>
        <p className="text-sm text-gray-400">
          {blog.content.substring(0, 100)}...
        </p>
        <Link
          to={`/blog/${blog.id}`}
          className="mt-4 inline-block text-green-500 hover:text-green-400 transition duration-200"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
