import React from "react";

const layout = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md flex space-x-8 w-120 border-2 border-violet-700">
        {/* Left side: User details */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4 text-violet-700">
            User Details
          </h2>
          <form>
            <div className="mb-4">
              <label htmlFor="firstName" className="text-sm text-violet-700">
                First Name
              </label>
              <input
                className="border-2 border-violet-700 rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-800"
                id="firstName"
                type="text"
                placeholder="John"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="text-sm text-violet-700">
                Email
              </label>
              <input
                className="border-2 border-violet-700 rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-800"
                id="email"
                type="email"
                placeholder="john@example.com"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="dob" className="text-sm text-violet-700">
                Date of Birth
              </label>
              <input
                className="border-2 border-violet-700 rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-800"
                id="dob"
                type="date"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="gender" className="text-sm text-violet-700">
                Gender
              </label>
              <select
                className="border-2 border-violet-700 rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-800 bg-white"
                id="gender"
              >
                <option value="" disabled>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="everyone">Everyone</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="interests" className="text-sm text-violet-700">
                Interests
              </label>
              <select
                className="border-2 border-violet-700 rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-800 bg-white"
                id="interests"
              >
                <option value="" disabled>
                  Select your interests
                </option>
                <option value="sports">Sports</option>
                <option value="music">Music</option>
                <option value="reading">Reading</option>
                {/* Add more interests as needed */}
              </select>
            </div>

            {/* Add more user details fields as needed */}
          </form>
        </div>

        {/* Right side: Photo selection */}
        <div className="flex-none">
          <h2 className="text-2xl font-semibold mb-4 text-violet-700">
            Photo Selection
          </h2>
          <div className="mb-4">
            <label htmlFor="photo" className="text-sm text-violet-700">
              Photo
            </label>
            <input
              className="border-2 border-violet-700 rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-800"
              id="photo"
              type="file"
            />
          </div>
        </div>

        <button
          className="bg-violet-700 mt-auto text-white py-2 px-4 rounded-md hover:bg-violet-600 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default layout;
