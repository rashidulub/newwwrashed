import Notices from "@/models/notices/notices.model";
import bdConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { notice_id, title, description, due_date, For, topic} = await request.json();

  await bdConnect();
  try {
    const notice = await Notices.create({
        notice_id, title, description, due_date, For, topic
    });
    return NextResponse.json(notice);
  } catch (error) {
    return NextResponse.json({
      meg: "data not added",
    });
  }
}

export async function GET() {
  await bdConnect();
  try {
    const data = await Notices.find();
    return NextResponse.json(data);
  } catch (error) { }
}
