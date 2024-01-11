import { Interests } from "@/models/interests";
import { Users } from "@/models/users";
import { connect } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

interface CustomError {
  message: string;
}
//request approval -- this is the request
export async function PUT(request: NextRequest, response: NextResponse) {
  connect();
  try {
    const body = await request.json();
    console.log("route for the friends add", body);
    const { email, id } = body;
    if (!email || !id) {
      throw new Error("Could not find email or id");
    }
    const userA = await Users.findOne({ email });
    const userB = await Users.findById({ _id: id });
    if (!userA) {
      throw new Error("Could not find the user A");
    }
    if (!userB) {
      throw new Error("Could not find the user B");
    }
    console.log("userA", userA);
    console.log("userB", userB);
    if (
      userA.friends.includes(userB._id) ||
      userB.friends.includes(userA._id)
    ) {
      throw new Error("Already a friend");
    }

    const updatedUser = await Users.findByIdAndUpdate(
      id,
      { $pull: { requestList: userA._id }, $push: { friends: userA._id } },
      { new: true } // To return the updated document
    );
    const updatedUserMe = await Users.findOneAndUpdate(
      { email },
      { $push: { friends: userB._id }, $pull: { requestList: userB._id } },
      { new: true } // To return the updated document
    );

    return NextResponse.json(
      { message: "User added to friendlist", updatedUserMe },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
