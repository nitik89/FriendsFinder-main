import { User } from "@/models/user";
import { connect } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";


interface UserPayload {
  name: string;
  email: string;
  password: string;
  avtar?: string;
}

connect();
export async function PUT(request: NextRequest) {
  try {
    const body: UserPayload = await request.json();
    console.log('body',body);
    const {email}=body;
    console.log(email);
    try {
      // const result = await User.findOneAndUpdate(
      //   { email: email },
      //   { $set: { /* Update fields here */ } },
      //   { returnDocument: 'after' } // To return the updated document
      // );
      // console.log('result',result);
      return NextResponse.json({message:"user added"},{status:201});
      
        
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({error:"refe"},{status:500});
  }
}