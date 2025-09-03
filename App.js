import React from "react";
import profilePic from "./profile-pic.jpg";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-sm w-full text-center">
        <img
          src={profilePic}
          alt="Profile"
          className="w-16 h-16 rounded-full border-2 border-blue-500 mx-auto mb-4 shadow-sm object-cover"
        />
        <h1 className="text-lg font-semibold text-gray-800">Celestine Emmanuel</h1>
        <p className="text-gray-500 text-sm mb-4">Front-End Developer</p>
        <p className="text-gray-600 text-sm mb-6">
          Passionate about building responsive and user-friendly web applications
          using React, Next.js, and Tailwind CSS.
        </p>
        <a
          href="https://github.com/emmanuelcelestine"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          View My Work
        </a>
      </div>
    </div>
  );
}
