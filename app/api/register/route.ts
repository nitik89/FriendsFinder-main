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
    const { email,gender,interests,name } = body;
    console.log(body);
    if (!email||!gender||!name) {
      throw new Error("missing or invalid details");
    }
    
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    let updatedUser;
    if(interests){
      const anotherSchemaDocs = await Interests.find({ _id: { $in: interests } });
     updatedUser = await User.updateOne(
      { email },
      { $push: { interests: anotherSchemaDocs } },
      { new: true }
    );
    }
    updatedUser=await User.updateOne({email},{$set:{name,gender}});

    return NextResponse.json(updatedUser, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
