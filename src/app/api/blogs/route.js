import { NextResponse } from "next/server";


export async function GET(req) {

    return NextResponse.json({ message: "blog page." }, { status: 201 });
}

export async function POST(req) {
    const { fastName, lastName } = req.json()
    console.log(fastName, lastName)
    return NextResponse.json({ message: "blog page." }, { status: 201 });
}