import axios from "axios";
import { useSession } from "next-auth/react";

import React, { useEffect, useState } from "react";

import PersonDetails from "./PersonDetails";

interface User {
  _id: string;
  email: string;
  contains_full_details: Boolean;

  // Add more properties as needed
}
const Friends = () => {
  const [usersData, setUsersData] = useState<User[]>([]);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        console.log(session);
        const email = session?.user?.email;
        console.log("email", email);
        const data = await axios.get(`/api/people?email=${email}`);
        console.log(data);
        setUsersData(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFriends();
  }, [session]);
  return (
    <>
      <PersonDetails usersData={usersData} />
    </>
  );
};

export default Friends;
