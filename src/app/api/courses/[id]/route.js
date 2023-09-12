import Courses from "@/models/courses/coursesModel";
import bdConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req, content) {
  const courseId = content.params.id;
  try {
    await bdConnect();

    const course = await Courses.findOne({
      _id: courseId,
    });

    if (course) {
      return NextResponse.json(course, { status: 200 });
    } else {
      return NextResponse.json(
        { success: false, message: "Course not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error fetching course:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch course" },
      { status: 500 }
    );
  }
}
