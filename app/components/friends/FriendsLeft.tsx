import React, { useEffect, useState } from "react";
import RequestList from "./RequestList";
import axios from "axios";
import { useSession } from "next-auth/react";

const FriendsLeft = () => {
  const { data: session } = useSession();
  console.log("session--", session);
  const [requestList, setRequestList] = useState([]);
  useEffect(() => {
    const fetchRequestList = async () => {
      try {
        if (!session?.user?.email) {
          return;
        }
        const requests = await axios.get(
          `/api/people/request?email=${session?.user?.email}`
        );
        console.log(requests);
        setRequestList(requests.data.requests);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRequestList();
  }, [session]);
  return (
    <div className="flex flex-col ">
      {requestList?.map((req) => (
        <RequestList userData={req} />
      ))}
    </div>
  );
};

export default FriendsLeft;
