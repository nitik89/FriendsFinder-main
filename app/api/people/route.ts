import { Users } from "@/models/users";
import { connect } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

interface CustomError {
  message: string;
}
//get people according the interests
export async function GET(request: NextRequest, response: NextResponse) {
  connect();
  try {
    const email = request.nextUrl.searchParams.get("email") || null;
    console.log("that is my email", email);
    const user = await Users.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "No user found " }, { status: 422 });
    }

    // Find other users with matching interests
    const usersWithMatchingInterests = await Users.find({
      interests: { $in: user.interests },
      email: { $ne: user.email }, // Exclude the original user
    });

    return NextResponse.json(usersWithMatchingInterests, { status: 201 });
  } catch (err) {
    console.log(err);
    const customError: CustomError = {
      message: "Internal Server Error",
    };
    return NextResponse.json({ message: customError }, { status: 500 });
  }
}
