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
    if (!email) {
      throw new Error("Could not find the email");
    }

    const user = await Users.findOne({ email }).populate("requestList");

    if (!user) {
      return NextResponse.json({ message: "No user found" }, { status: 404 });
    }

    return NextResponse.json({ requests: user.requestList }, { status: 201 });
  } catch (err) {
    console.log("err", err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
