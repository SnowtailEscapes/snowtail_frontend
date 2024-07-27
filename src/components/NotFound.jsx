import React from "react";
import { Link } from "react-router-dom";
import error from "../assets/LargeImages/error.webp";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center md:p-32 p-2 mt-10 md:mt-0 overflow-hidden">
      <div className="flex items-center space-x-10 flex-col md:flex-row">
        <img src={error} alt="Error 404" className="md:w-1/2 w-full h-auto" />
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl text-main-brand">Error 404. Page Not Found!</h1>
          <h3 className="text-xl md:text-3xl mt-4">
            Go back to <Link to="/" className="text-blue-400">Home</Link>
          </h3>
        </div>
      </div>
    </div>
  );
}
