import { NextResponse } from "next/server";

export async function GET(req) {

    return NextResponse.json({ message: "Dashboard page." }, { status: 201 });
}