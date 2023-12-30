import { Interests } from "@/models/interests";
import { User } from "@/models/user";
import { connect } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

interface CustomError {
  message: string;
}

export async function POST(request: NextRequest, response: NextResponse) {
  connect();
  try {
    const body = await request.json();
    console.log(body);
    const { email, id } = body;
    console.log(email, id);
    if (!email || !id) {
      throw new Error("Could not find email or id");
    }
    const userA = await User.findOne({ email });
    const userB = await User.findById({ _id: id });
    if (!userA) {
      throw new Error("Could not find the user A");
    }
    if (!userB) {
      throw new Error("Could not find the user B");
    }

    if (
      userA.friends.includes(userB._id) ||
      userB.friends.includes(userA._id)
    ) {
      throw new Error("Already a friend");
    }
    userA.friends.push(userB);
    userB.friends.push(userA);

    userA.save();
    userB.save();

    return NextResponse.json(
      { message: "User added to friendlist" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
