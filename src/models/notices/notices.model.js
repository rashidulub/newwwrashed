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

const Notices = models.Notices || model("Notices", noticesSchema);

export default Notices;


