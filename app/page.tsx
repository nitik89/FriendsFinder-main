"use client"
import { SessionProvider } from "next-auth/react";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

export default function Home() {
  const isLoggedIn = false;
  return (
    <div className="flex flex-col h-screen">
    
      {!isLoggedIn && (
        <>
          <Navbar />
          <Homepage />
        </>
      )}
     
    </div>
  );
}
