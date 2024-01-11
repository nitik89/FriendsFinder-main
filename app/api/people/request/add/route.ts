import { Users } from "@/models/users";
import { connect } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

interface CustomError {
  message: string;
}
//request approval
export async function PUT(request: NextRequest, response: NextResponse) {
  connect();
  try {
    const body = await request.json();
    const { email, id } = body;
    console.log("body", body);
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

    if (
      userA?.friends?.includes(userB._id) ||
      userB?.friends?.includes(userA._id) ||
      userA?.requestList?.includes(userB._id) ||
      userB?.requestList?.includes(userA._id)
    ) {
      throw new Error("Already a friend");
    }
    const updatedUser = await Users.findByIdAndUpdate(
      id,
      { $push: { requestList: userA } },
      { new: true } // To return the updated document
    );

    return NextResponse.json(
      { message: "Request sent successfully", updatedUser },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
