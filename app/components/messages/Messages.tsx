import Image from "next/image";
import React from "react";

const Messages = () => {
  return (
    <div className="flex-1 flex flex-col border-violet-700 shadow-md items-center">
      <div className="flex w-full flex-row items-center bg-gradient-to-r from-violet-600 to-violet-800 shadow-md space-x-4 p-2 h-28">
        <Image
          src="/test.webp"
          height={50}
          width={50}
          alt="test"
          className="rounded-full"
        />
        <span className="text-bold text-white">John Doe</span>
      </div>
      <div className="flex flex-col w-full mt-auto text-white overflow-y-auto h-screen flex-col-reverse">
        <div className="w-1/2 bg-pink-500 px-6 py-3 rounded-full m-3  shadow-md ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quidem,
          vitae odio, dolorem ullam consequuntur ut eaque porro repudiandae
          eveniet amet architecto! Blanditiis dolor vitae, ea porro facere minus
          quae?
        </div>
      </div>

      <div className="flex w-full mb-2 border rounded-md overflow-hidden">
        <input
          type="text"
          className="flex-1 bg-gray-800 text-white p-3 shadow-md px-4 border-pink-500 rounded-l-md"
          placeholder="Type your message..."
        />
        <button className="bg-violet-700 text-white px-6 py-2 shadow-md rounded-r-md">
          Send
        </button>
      </div>
    </div>
  );
};

export default Messages;
