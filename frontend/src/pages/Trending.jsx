import React from "react";
import BlogCard from "../components/BlogCard";

const trendingBlogs = [
  {
    id: 1,
    title: "Traveling in Style",
    content: "Top destinations of 2024.",
    category: "Travel",
    likes: 45,
  },
  {
    id: 2,
    title: "Tech Innovations 2024",
    content: "Exploring AI advancements.",
    category: "Tech",
    likes: 40,
  },
];

const Trending = () => {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen p-8 lg:p-16">
      {/* Header */}
      <h2 className="text-4xl font-bold font-mono text-white mb-10 text-center">
        Trending Blogs
      </h2>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trendingBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
