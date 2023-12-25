import Image from "next/image";
import React from "react";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from "react-icons/io";

const Friends = () => {
  return (
    <div className="flex-1 flex flex-col items-center p-4 justify-center">
      <div className="relative">
        <Image
          className="rounded-xl"
          src="/test.webp"
          alt="test"
          width={400}
          height={600}
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white p-4">
          <h3 className="text-xl font-bold mb-2">Rahul Sharma</h3>
          <div className="text-sm text-gray-300 mb-2">
            Preferences - Gym, Gym, Gym
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center space-x-4">
        <IoIosCheckmarkCircleOutline
          size={40}
          color="#22c55e"
          className="cursor-pointer hover:opacity-70"
        />
        <IoIosCloseCircleOutline
          size={40}
          color="#dc2626"
          className="cursor-pointer hover:opacity-70"
        />
      </div>
    </div>
  );
};

export default Friends;
