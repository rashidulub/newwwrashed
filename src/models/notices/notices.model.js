import mongoose from "mongoose";
import { Schema, model, models } from "mongoose";


const noticesSchema = new Schema(
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
        createdAt: {
            type: String,
        },
        updatedAt: {
            type: String,
        },

    }, { timestamps: true })

const Assignments = models && models.Assignment ? models.Assignment : model("Assignment", assignmentSchema);


export default Notices;


