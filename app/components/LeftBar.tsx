import React from "react";
import { FaUser } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { IoIosHand } from "react-icons/io";

const LeftBar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-violet-600 to-violet-800 flex justify-center space-x-4 py-2">
      <div className="group cursor-pointer p-3 transition duration-300 transform hover:scale-105 rounded-md  flex flex-col justify-center items-center">
        <FaUser size={24} className="text-white" />
        <p className="text-sm text-white mt-2">Profile</p>
      </div>
      <div className="group cursor-pointer p-3 transition duration-300 transform hover:scale-105 rounded-md flex flex-col justify-center items-center">
        <FiMessageSquare size={24} className="text-white" />
        <p className="text-sm text-white mt-2">Messages</p>
      </div>
      <div className="group cursor-pointer p-3 transition duration-300 transform hover:scale-105 rounded-md flex flex-col justify-center items-center">
        <IoIosHand size={24} className="text-white" />
        <p className="text-sm text-white mt-2">Activity</p>
      </div>
    </div>
  );
};

export default LeftBar;
