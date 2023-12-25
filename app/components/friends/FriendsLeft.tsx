import React from "react";
import RequestList from "./RequestList";

const FriendsLeft = () => {
  return (
    <div className="flex flex-col ">
      <RequestList />
      <RequestList />
      <RequestList />
      <RequestList />
    </div>
  );
};

export default FriendsLeft;
