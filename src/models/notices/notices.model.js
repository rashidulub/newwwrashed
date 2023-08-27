import mongoose from "mongoose";
import { Schema, model, models } from "mongoose";


const noticesSchema = new Schema(
    {
        notice_id: {
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
        For: {
            type: String,
        },
        topic: {
            type: String,
        },

    }, { timestamps: true })

const Notices = models.Notices || model("Notices", noticesSchema);

export default Notices;


