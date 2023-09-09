import User from "@/models/userModels/userModel";
import Courses from "@/models/courses/coursesModel";
import bdConnect from "@/utils/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function DELETE(request, content) {
  try {
    const session = await getServerSession(authOptions);
    const { user } = session;

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const userEmail = content.params.id;

    if (!userEmail) {
      return NextResponse.json(
        { error: "Email not provided" },
        { status: 400 }
      );
    }

    await bdConnect();
    
    // Check if the user exists before deleting
    const existingUser = await User.findOne({ email: userEmail });

    if (!existingUser) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }
    // Delete the user
    await User.deleteOne({ email: userEmail });

    // Find courses owned by the user
    const coursesOwnedByUser = await Courses.find({ ownerName: user.name });

    for (const course of coursesOwnedByUser) {
      if (course.members.length === 1) {
        // If the user is the only member, delete the course
        await Courses.deleteOne({ _id: course._id });
      } else {
        // If there are other members, transfer ownership to the first member
        const newOwnerUsername = course.members[0].username;
        await Courses.updateOne(
          { _id: course._id },
          { ownerName: newOwnerUsername }
        );
      }
    }

    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting resource:", error);
    return NextResponse.json(
      { error: "Failed to delete resource" },
      { status: 500 }
    );
  }
}
