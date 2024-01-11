import React from "react";
import axios from "axios";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useSession } from "next-auth/react";

interface UserData {
  _id: string;
  name: string;
  // Add more properties as needed
}

const acceptRequest = async (userData: UserData, session) => {
  // console.log("user", userData, session);
  const { _id } = userData;
  console.log("id", _id);
  try {
    const user = await axios.put("/api/people/friends/add", {
      id: _id,
      email: session?.user?.email,
    });
    console.log(user);
  } catch (err) {
    console.log("err", err);
  }
};
const rejectRequest = async (userData: UserData, session) => {
  const { _id } = userData;
  console.log("id", _id);
  try {
    const user = await axios.put("/api/people/request/remove", {
      id: _id,
      email: session?.user?.email,
    });
    console.log(user);
  } catch (err) {
    console.log("err", err);
  }
};
const RequestList: React.FC<{ userData: UserData }> = ({ userData }) => {
  const { data: session } = useSession();
  return (
    <>
      <div className="flex-1 bg-gradient-to-r from-pink-600 to-rose-400 py-6 px-5 rounded-md shadow-lg border-black-500 space-x-4 mt-4 transition duration-300 transform hover:scale-105">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-3xl font-extrabold text-white">
              {userData?.name}
            </span>
            <p className="text-sm text-white">Sent a friend request</p>
          </div>
          <div className="flex space-x-4 items-center">
            <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300 focus:outline-none focus:ring focus:border-green-600">
              <FaCheck
                className="text-xl"
                onClick={() => {
                  acceptRequest(userData, session);
                }}
              />
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300 focus:outline-none focus:ring focus:border-red-600">
              <FaTimes
                className="text-xl"
                onClick={() => {
                  rejectRequest(userData, session);
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestList;
