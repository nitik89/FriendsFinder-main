import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="flex-1 flex flex-col border-violet-700 shadow-md items-center justify-start">
      <div className="p-4">
        <Image
          className="rounded-xl"
          src="/test.webp"
          alt="test"
          width={400}
          height={600}
        />
      </div>
      <div className="text-center">
        <p className="text-xl font-semibold">John Doe</p>
        <p className="text-gray-500">Age: 30</p>
      </div>
    </div>
  );
};

export default Profile;
