"use client";
import React, { useState } from "react";
import LeftBar from "../components/LeftBar";
import Friends from "../components/friends/Friends";
import MessagesLeftBar from "../components/messages/MessagesLeftBar";
import Messages from "../components/messages/Messages";
import FriendsLeft from "../components/friends/FriendsLeft";
import ProfileLeft from "../components/profile/ProfileLeft";
import Profile from "../components/profile/Profile";

const page = () => {
  const [curr, setCurr] = useState<string>("profile");
  return (
    <div className="flex h-screen bg-violet-100">
      <div className="rounded-md shadow-md flex w-full ">
        <div className="flex-none w-1/3 border-2 border-violet-700 shadow-md items-center justify-center">
          <LeftBar />
      <FriendsLeft />
        </div>
        <Friends />
      </div>
    </div>
  );
};

export default page;
