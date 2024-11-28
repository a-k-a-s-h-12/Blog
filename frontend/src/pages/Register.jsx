import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Add registration logic here
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 text-gray-200 rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold font-mono text-white mb-6 text-center">
          Register
        </h2>
        <form onSubmit={handleRegister} className="space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
