import axios from "axios";
import { useSession } from "next-auth/react";

import React, { useEffect, useState } from "react";

import PersonDetails from "./PersonDetails";



const Friends = () => {

  const [usersData,setUsersData]=useState();
  const [index,setCurrIdx]=useState(0);
  const {data:session}=useSession();
  console.log(session);
  useEffect( ()=>{
   
    const fetchFriends=async ()=>{
      
      try{
        console.log(session);
        const email=session?.user.email;
        console.log('email',email);
      const data=await axios.get(`/api/people?email=${email}`);
      setUsersData(data.data);
      }
      catch(err){
        console.log(err);
      }
    }
    fetchFriends();
  },[session])  
  return (
   <>
   <PersonDetails />
   </>
  );
};

export default Friends;
