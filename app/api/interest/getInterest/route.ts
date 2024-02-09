import { Interests } from "@/models/interests";
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
    const interest = await Interests.find();

    if (!interest) {
      return NextResponse.json({ message: "No user found" }, { status: 404 });
    }

    return NextResponse.json({ interest }, { status: 201 });
  } catch (err) {
    console.log(err);
    const customError: CustomError = {
      message: "Internal Server Error",
    };
    return NextResponse.json({ message: customError }, { status: 500 });
  }
}
