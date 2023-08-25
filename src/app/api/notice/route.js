import Notices from "@/models/notices/notices.model";
import bdConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { notice_id, title, description, due_date, For, topic } = await request.json();

    await bdConnect();
    try {
        const notices = await Notices.create({
            notice_id, title, description, due_date, For, topic
        });
        return NextResponse.json(notices);
    } catch (error) {
        return NextResponse.json({
            meg: "data not added",
        });
    }
}



// export async function GET() {
//     let data = [];
//     let success = true;

//     try {
//         await bdConnect();
//         data = await Notices.find();

//     } catch (error) {
//         data = { result: "error" }
//         success: false;

//     }
//     return NextResponse.json({ result: data, success })
// }



export async function GET() {
    await bdConnect();
    try {
        const notices = await Notices.find({}); // Retrieve all courses
        return NextResponse.json({ notices }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: "Failed to retrieve notices",
            status: 500,
        });
    }
}