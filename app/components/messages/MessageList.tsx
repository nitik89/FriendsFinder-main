import Image from "next/image";
import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const MessageList = () => {
  return (
    <>
      <div className="flex-1 flex flex-row bg-gradient-to-r from-pink-600 to-rose-400 py-6 px-5 rounded-md shadow-lg border-black-500 space-x-4 mt-4 transition duration-300 transform hover:scale-105">
        <div>
          <Image
            src="/test.webp"
            height={50}
            width={50}
            alt="user"
            className="rounded-full"
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-white">John Doe</span>
            <p className="text-sm text-white">This is the latest message</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageList;
