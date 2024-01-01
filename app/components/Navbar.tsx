"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LiaLanguageSolid } from "react-icons/lia";
import { signIn, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  console.log("session--", session);
  const router = useRouter();

  useEffect(() => {
    // If there's a session, redirect to the home page
    if (session && !session.contains_full_details) {
      router.push("/registeration");
    } else if (session) {
      router.push("/home");
    }
  }, [session, router]);
  const handleLogin = async () => {
    console.log("Hey");
    const response = await signIn("google");
  };

  return (
    <div className="shadow-md p-4">
      <div className="container flex flex-row justify-between items-center h-16">
        {/* Left side */}
        <div className="flex flex-row items-center space-x-4 ">
          <div className="text-violet-700 text-4xl font-semibold cursor-pointer">
            DignityDates
          </div>
          <div className="text-gray-800 text-lg hover:text-gray-600 transition duration-300 cursor-pointer">
            Products
          </div>
          <div className="text-gray-800 text-lg hover:text-gray-600 transition duration-300 cursor-pointer">
            Chats
          </div>
          <div className="text-gray-800 text-lg hover:text-gray-600 transition duration-300 cursor-pointer">
            Notifications
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-row items-center space-x-8">
          <div className="flex flex-row items-center space-x-2">
            <LiaLanguageSolid />
            <div className="text-gray-800 text-lg hover:text-gray-600 transition duration-300 cursor-pointer">
              Language
            </div>
          </div>
          <button
            className="bg-violet-700 text-white p-2 px-4 rounded-full w-32 border border-white cursor-pointer"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
