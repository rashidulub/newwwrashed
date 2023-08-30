import mongoose from "mongoose";
import { Schema, models, model } from "mongoose";

const submissionsSchema = new Schema({
    assignment: {
        type: mongoose.Types.ObjectId,
        ref: "Assignments"
    },
    student: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    submission_date: {
        type: Number,
        default: (new Date()).getTime()
    },
    comments: [{
        type: String,
        require: true
    }]
}, { timestamps: true })

const Submissions = models.Submissions || model('Submissions', submissionsSchema);
export default Submissions;