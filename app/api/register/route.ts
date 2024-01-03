import { Interests } from "@/models/interests";
import { Users } from "@/models/users";
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
    const { email, gender, interests, name } = body;
    if (!email || !gender || !name) {
      throw new Error("missing or invalid details");
    }

    const user = await Users.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    let updatedUser;
    if (interests) {
      const anotherSchemaDocs = await Interests.find({
        _id: { $in: interests },
      });
      updatedUser = await Users.updateOne(
        { email },
        { $push: { interests: anotherSchemaDocs } },
        { new: true }
      );
    }
    updatedUser = await Users.updateOne(
      { email },
      { $set: { name, gender, contains_full_details: true } }
    );

    return NextResponse.json(updatedUser, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
