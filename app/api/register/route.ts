import { Interests } from "@/models/interests";
import { Users } from "@/models/users";
import { connect } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, response: NextResponse) {
  connect();
  try {
    const body = await request.json();
    const { email, gender, name, dob, interests } = body;
    console.log("register", body);
    // if (!email || !gender || !name || !dob) {
    //   throw new Error("missing or invalid details");
    // }

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
      { $set: { name, gender, contains_full_details: true, dob } }
    );

    return NextResponse.json(updatedUser, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
