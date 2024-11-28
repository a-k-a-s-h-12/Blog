import React from "react";
import BlogCard from "../components/BlogCard";

const Home = ({ blogs }) => {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen p-8 lg:p-16">
      <h2 className="text-4xl font-bold font-monos text-white mb-10 text-center">
        All Blogs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Home;
