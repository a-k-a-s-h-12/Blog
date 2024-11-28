import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 p-4 mt-8 pt-5">
      <div className="container mx-auto text-center space-y-4">
        <div className="flex justify-center space-x-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500"
          >
            Twitter
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600"
          >
            Instagram
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Blog Website. All rights reserved.
        </p>
        <p>
          Contact us at:{" "}
          <a
            href="mailto:support@blogwebsite.com"
            className="text-blue-400 hover:underline"
          >
            support@blogwebsite.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
