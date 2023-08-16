import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import bdConnect from "@/utils/dbConnect";
import User from "@/models/userModels/userModel";

export async function POST(req) {
    const { name, email, password } = await req.json();
    console.log(name, email, password)
    try {
        // await bdConnect()
        // const user = await User.findOne({ email: email })
        // console.log(user)
        // const hashedPassword = await bcrypt.hash(password, 10);

        // await User.create({ name, email, password: hashedPassword });

        // return NextResponse.json({ message: "User registered." }, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { message: "An error occurred while registering the user." },
            { status: 500 }
        );
    }
}


export async function GET(req) {
    return NextResponse.json({ message: "User registered." }, { status: 201 });
}