// import mongoose from "mongoose";
import { Schema, models, model } from "mongoose";
const assignmentSchema = new Schema(
  {
    course_id: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    due_date: {
      type: String,
    },
    attachments: [
      {
        url: {
          type: String,
        },
      },
    ],
    submissions: [],
    notices: [],
    comments: [],
    reviews: [],
    For: {
      type: String,
    },
    topic: {
      type: String,
    },
    total_mark: {
      type: String,
    }
  },
  { timestamps: true }
);

const Assignments = models.Assignment || model("Assignment", assignmentSchema);

export default Assignments;
