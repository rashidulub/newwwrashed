import Courses from "@/models/courses/coursesModel"
import bdConnect from "@/utils/dbConnect"
import { NextResponse } from "next/server"


export async function POST(request) {
    const { name, description, picture } = await request.json()
    console.log(courseName, description, picture)
    await bdConnect()
    try {
        const courses = await Courses.create({ courseName, description, picture })
        return NextResponse.json({ course: courses, meassge: "successfully added data" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            meassge: "data not added",
            status: 500
        })
    }
}