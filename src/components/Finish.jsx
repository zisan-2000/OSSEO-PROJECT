import React from "react";
import { useNavigate } from "react-router-dom";

const Finish = () => {
  const navigate = useNavigate();

  const handleTourClick = () => {
    // Logic for beginning the tour can be added here
    navigate("/tour"); // example route
  };

  const handleDashboardClick = () => {
    navigate("/dashboard"); // example route
  };

  return (
    <div className="bg-white p-8 shadow-md w-[968px] h-[722px] ml-[262px] mt-[138px] rounded-md text-center">
      <h2 className="text-2xl font-bold mb-6">Setup Complete!</h2>
      <p className="mb-6 text-gray-700">
        Let’s take a 1 minute tour of your SEO dashboard. Click the button below
        to begin.
      </p>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleTourClick}
          className="bg-gradient-to-b from-[#0FD03B] to-[#0B9229] text-white py-2 px-6 rounded "
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
