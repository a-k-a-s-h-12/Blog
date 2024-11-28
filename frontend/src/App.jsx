import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MostLiked from "./pages/MostLiked";
import Trending from "./pages/Trending";
import CreateBlog from "./pages/CreateBlog";

function App() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Tech Innovations 2024",
      content: "Exploring AI advancements.",
      category: "Tech",
      likes: 10,
      image:
        " https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Healthy Living Tips",
      content: "Simple ways to stay healthy.",
      category: "Health",
      likes: 15,
      image:
        "https://st2.depositphotos.com/1907633/8862/i/450/depositphotos_88628662-stock-photo-medicine-doctor-hand-working-with.jpg",
    },
  ]);

  const addBlog = (newBlog) => {
    const blogWithId = {
      id: blogs.length + 1,
      ...newBlog,
      image: URL.createObjectURL(newBlog.image), // Convert file to previewable URL
      likes: 0,
    };
    setBlogs((prev) => [...prev, blogWithId]);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home blogs={blogs} />} />
            <Route path="/blog/:id" element={<BlogDetails blogs={blogs} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/most-liked" element={<MostLiked blogs={blogs} />} />
            <Route path="/trending" element={<Trending blogs={blogs} />} />
            <Route path="/create" element={<CreateBlog addBlog={addBlog} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
