import React, { useState } from "react";
import Image from "next/image";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from "react-icons/io";

interface User {
  _id: string;
  email: string;
  name: string;
  contains_full_details: Boolean;
}
interface UserListProps {
  usersData: User[];
}

const PersonDetails: React.FC<UserListProps> = ({ usersData }) => {
  const [index, setCurrIdx] = useState<number>(0);

  const gotoNext = () => {
    console.log(index);
    if (index + 1 < usersData.length) {
      setCurrIdx((prev) => prev + 1);
    }
  };

  return index == usersData.length ? (
    <div className="flex-1 flex flex-col items-center p-4 justify-center">
      <div className="flex items-center justify-center align-center h-full">
        <p className="text-lg text-gray-600">End of the user list here!!</p>
      </div>
    </div>
  ) : (
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
          <h3 className="text-xl font-bold mb-2">{usersData[index]?.name}</h3>
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
          onClick={() => {
            gotoNext();
          }}
        />
        <IoIosCloseCircleOutline
          size={40}
          color="#dc2626"
          className="cursor-pointer hover:opacity-70"
          onClick={() => {
            gotoNext();
          }}
        />
      </div>
    </div>
  );
};

export default PersonDetails;
