import mongoose from "mongoose";
import { Schema, models, model } from "mongoose";

const assignmentSchema = new Schema(
  {
    course_id: {
      type: mongoose.Types.ObjectId,
      ref: "Courses",
    },
    title: {
      type: String,
      require: true,
    },
    descrption: {
      type: String,
      require: true,
    },
    due_date: {
      type: String,
      require: true,
    },
    submissions: [{
      type: mongoose.Types.ObjectId,
      ref: "Submissions",
    }],
    notices: [{
      type: mongoose.Types.ObjectId,
      ref: "Notices",
    }],
    comments: [{
      type: mongoose.Types.ObjectId,
      ref: "Comments",
    }],
    reviews: {
      type: mongoose.Types.ObjectId,
      ref: "Reviews",
    },
  },
  { timestamps: true }
);

const Assignments =
  models.Assignments || model("Assignments", assignmentSchema);

export default Assignments;
