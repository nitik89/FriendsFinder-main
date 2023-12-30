import { Interests } from "@/models/interests";
import { User } from "@/models/user";
import { connect } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

interface UserPayload {
  name: string;
  email: string;
  password: string;
  avtar?: string;
}
interface CustomError {
  message: string;
}
interface InterestUser {
  name: string;
  description: string;
}

export async function PUT(request: NextRequest, response: NextResponse) {
  connect();
  try {
    const body = await request.json();
    const { email, interests } = body;
    if (!email) {
      throw new Error("Could not find email");
    }

    const anotherSchemaDocs = await Interests.find({ _id: { $in: interests } });

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    const updatedUser = await User.updateOne(
      { email },
      { $push: { interests: anotherSchemaDocs } },
      { new: true }
    );

    return NextResponse.json(updatedUser, { status: 201 });
  } catch (err) {
    const customError: CustomError = {
      message: "Internal Server Error",
    };
    return NextResponse.json({ message: customError }, { status: 500 });
  }
}
