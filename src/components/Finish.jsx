import React from "react";
import { useNavigate } from "react-router-dom";

const Finish = () => {
  const navigate = useNavigate();

  const handleTourClick = () => {
    navigate("/tour"); // example route
  };

  const handleDashboardClick = () => {
    navigate("/dashboard"); // example route
  };

  return (
    <div className="bg-white p-4 md:p-8 shadow-md w-full max-w-[968px] mx-auto mt-16 md:mt-24 rounded-md text-center">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
        Setup Complete!
      </h2>
      <p className="mb-4 md:mb-6 text-gray-700">
        Let’s take a 1 minute tour of your SEO dashboard. Click the button below
        to begin.
      </p>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
        <button
          onClick={handleTourClick}
          className="bg-gradient-to-b from-[#0FD03B] to-[#0B9229] text-white py-2 px-6 rounded"
        >
          Begin 1 Minute Tour
        </button>
        <button
          onClick={handleDashboardClick}
          className="bg-gradient-to-b from-[#00ADEF] to-[#2B3D8E] text-white py-2 px-6 rounded"
        >
          Enter Dashboard
        </button>
      </div>
    </div>
  );
};

export default Finish;
