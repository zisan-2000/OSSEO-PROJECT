import React from "react";
import { FaPowerOff } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`bg-gradient-to-b from-[#00ADEF] to-[#2B3DBE] text-white w-[200px] md:w-[225px] h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] flex flex-col justify-between p-4 md:p-6 fixed top-[80px] md:top-[100px] left-0 border-r-1.5 border-white border-opacity-50 overflow-y-auto transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
    >
      <div>
        <h2 className="text-lg font-bold mb-8">Account Setup</h2>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/contacts"
              activeClassName="text-yellow-500"
              className="flex items-center p-2 rounded hover:bg-white hover:text-blue-600 transition duration-300 ease-in-out"
            >
              <div className="w-6 h-6 flex justify-center items-center border-2 border-white rounded-full mr-2">
                <span className="w-3 h-3 bg-transparent rounded-full"></span>
              </div>
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/business-details"
              activeClassName="text-yellow-500"
              className="flex items-center p-2 rounded hover:bg-white hover:text-blue-600 transition duration-300 ease-in-out"
            >
              <div className="w-6 h-6 flex justify-center items-center border-2 border-white rounded-full mr-2">
                <span className="w-3 h-3 bg-transparent rounded-full"></span>
              </div>
              Business Details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/brand-assets"
              activeClassName="text-yellow-500"
              className="flex items-center p-2 rounded hover:bg-white hover:text-blue-600 transition duration-300 ease-in-out"
            >
              <div className="w-6 h-6 flex justify-center items-center border-2 border-white rounded-full mr-2">
                <span className="w-3 h-3 bg-transparent rounded-full"></span>
              </div>
              Brand Assets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/grant-access"
              activeClassName="text-yellow-500"
              className="flex items-center p-2 rounded hover:bg-white hover:text-blue-600 transition duration-300 ease-in-out"
            >
              <div className="w-6 h-6 flex justify-center items-center border-2 border-white rounded-full mr-2">
                <span className="w-3 h-3 bg-transparent rounded-full"></span>
              </div>
              Grant Access
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/finish"
              activeClassName="text-yellow-500"
              className="flex items-center p-2 rounded hover:bg-white hover:text-blue-600 transition duration-300 ease-in-out"
            >
              <div className="w-6 h-6 flex justify-center items-center border-2 border-white rounded-full mr-2">
                <span className="w-3 h-3 bg-transparent rounded-full"></span>
              </div>
              Finish
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="mt-auto">
        <button className="w-full text-left p-2 rounded hover:bg-white hover:text-blue-600 transition duration-300 ease-in-out flex items-center">
          <FaPowerOff className="w-6 h-6 mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
