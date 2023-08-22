import mongoose from "mongoose";
import { Schema, models, model } from "mongoose";

const reviewsSchema = new Schema({
    rating: {
        type: Number,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    course: {
        type: mongoose.Types.ObjectId,
        ref: "Courses"
    }
}, { timestamps: true })

const Reviews = models.Reviews || model("Reviews", reviewsSchema);

export default Reviews;