import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SoloAlert from "soloalert";

const CreateBlog = ({ addBlog }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file)); // Preview the uploaded image
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.title &&
      formData.content &&
      formData.category &&
      formData.image
    ) {
      addBlog(formData);
      await SoloAlert.alert({
        title: "Success!",
        body: "Blog created successfully.",
        icon: "success",
        theme: "light",
      });
      navigate("/"); // Redirect to Home
    } else {
      await SoloAlert.alert({
        title: "Error",
        body: "Please fill in all fields and upload an image.",
        icon: "error",
        theme: "dark",
      });
    }
  };

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen flex items-center justify-center px-4">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-xl">
        <h2 className="text-3xl font-bold font-mono text-white mb-6 text-center">
          Create a New Blog
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Blog Title"
            className="w-full p-3 bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Blog Content"
            className="w-full p-3 bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="6"
            required
          ></textarea>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Category</option>
            <option value="Tech">Tech</option>
            <option value="Health">Health</option>
            <option value="Travel">Travel</option>
          </select>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-3 bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-40 object-cover rounded mt-4 border border-gray-600"
            />
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
