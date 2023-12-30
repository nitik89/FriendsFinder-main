import { Interests } from "@/models/interests";
import { connect } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

interface CustomError {
  message: string;
}

export async function POST(request: NextRequest, response: NextResponse) {
  connect();
  try {
    const body = await request.json();
    const { name, description } = body;
    if (!name || !description) {
      throw new Error("Could not find email");
    }
    const interest = await Interests.create({ name, description });

    return NextResponse.json(interest, { status: 201 });
  } catch (err) {
    const customError: CustomError = {
      message: "Internal Server Error",
    };
    return NextResponse.json({ message: customError }, { status: 500 });
  }
}
