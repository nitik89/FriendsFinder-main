import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const RequestList = () => {
  return (
    <>
      <div className="flex-1 bg-gradient-to-r from-pink-600 to-rose-400 py-6 px-5 rounded-md shadow-lg border-black-500 space-x-4 mt-4 transition duration-300 transform hover:scale-105">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-3xl font-extrabold text-white">John Doe</span>
            <p className="text-sm text-white">Sent a friend request</p>
          </div>
          <div className="flex space-x-4 items-center">
            <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300 focus:outline-none focus:ring focus:border-green-600">
              <FaCheck className="text-xl" />
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300 focus:outline-none focus:ring focus:border-red-600">
              <FaTimes className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestList;
