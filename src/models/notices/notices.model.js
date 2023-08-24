import mongoose from "mongoose";
import { Schema, model, models } from "mongoose";


const noticesSchema = new Schema({
    text: {
        type: String,
        require: true
    },
    assignment: {
        type: mongoose.Types.ObjectId,
        ref: "Assignments"
    },
    teacher: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })

const Notices = models.Notices || model("Notices", noticesSchema);

export default Notices;