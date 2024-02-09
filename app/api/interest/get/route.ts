import { Users } from "@/models/users";
import { connect } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

interface CustomError {
  message: string;
}
//get users friends
export async function GET(request: NextRequest, response: NextResponse) {
  connect();
  try {
    const email = request.nextUrl.searchParams.get("email") || null;

    const user = await Users.findOne({ email }).populate("friends");

    if (!user) {
      return NextResponse.json({ message: "No user found" }, { status: 404 });
    }

    return NextResponse.json({ friends: user.friends }, { status: 201 });
  } catch (err) {
    console.log(err);
    const customError: CustomError = {
      message: "Internal Server Error",
    };
    return NextResponse.json({ message: customError }, { status: 500 });
  }
}
