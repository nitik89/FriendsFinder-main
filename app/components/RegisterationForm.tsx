"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm, Resolver, SubmitHandler } from "react-hook-form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type FormValues = {
  name: string;
  dob: string;
  gender: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.name ? values : {},
    errors: !values.name
      ? {
          name: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

const RegisterationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  const [interests, setInterest] = useState([]);
  const router = useRouter();
  const { data: session } = useSession();
  console.log("data", session);

  const fetchInterest = async () => {
    try {
      const res = await axios.get("/api/interest/getInterest");
      console.log("res----", res);
      setInterest(res.data.interest);
    } catch (err) {}
  };

  useEffect(() => {
    fetchInterest();
  }, []);
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const formData = { ...data, email: session?.user.email };
      console.log("formdata", formData);
      const res = await axios.put("/api/register", formData);
      if (res.status === 201) {
        // router.push("/home");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md flex space-x-8 w-120 border-2 border-violet-700">
        {/* Left side: User details */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 text-violet-700">
              User Details
            </h2>

            <div className="mb-4">
              <label htmlFor="name" className="text-sm text-violet-700">
                First Name
              </label>
              <input
                {...register("name")}
                className="border-2 border-violet-700 rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-800"
                id="name"
                type="text"
                placeholder="John"
              />
              {errors?.name && <p>{errors.name.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="dob" className="text-sm text-violet-700">
                Date of Birth
              </label>
              <input
                {...register("dob")}
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
                {...register("gender")}
                className="border-2 border-violet-700 rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-800 bg-white"
                id="gender"
              >
                <option value="" disabled>
                  Select your gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="interests" className="text-sm text-violet-700">
                Interests
              </label>
              <select
                className="border-2 border-violet-700 rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-800 bg-white"
                id="interests"
                multiple
              >
                <option value="" disabled>
                  Select your interests
                </option>
                {interests?.map((interest) => {
                  return <option value={interest._id}>{interest.name}</option>;
                })}
                {/* Add more interests as needed */}
              </select>
            </div>

            {/* Add more user details fields as needed */}
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
        </form>
      </div>
    </div>
  );
};

export default RegisterationForm;
