import React from "react";

const Navbar = ({
  showAlert,
  alertMessage,
  alertStyle,
  onCloseAlert,
  onToggleSidebar,
}) => {
  return (
    <nav className="bg-white h-[80px] md:h-[100px] w-full flex items-center shadow-md fixed top-0 left-0 px-4 md:px-8">
      <button className="text-gray-700 md:hidden" onClick={onToggleSidebar}>
        &#9776;
      </button>
      <div className="flex items-center ml-4">
        <img src="logo.png" alt="OCSEO Logo" className="h-8 md:h-10" />
      </div>
      <div className="flex-grow"></div>{" "}
      {showAlert && (
        <div
          className={`px-2 py-1 md:px-4 md:py-2 rounded-lg flex items-center ${alertStyle}`}
        >
          <div className="flex flex-col text-center">
            <span className="font-bold text-blue-600 text-sm md:text-base">
              {alertMessage.title}
            </span>
            <span className="text-pink-500 text-xs md:text-sm">
              {alertMessage.message}
            </span>
          </div>
          <button className="ml-2 md:ml-4 text-pink-600" onClick={onCloseAlert}>
            ✖
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
