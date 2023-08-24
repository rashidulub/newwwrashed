//mongodb schema

import mongoose from "mongoose";
import { Schema, model, models } from "mongoose";


const coursesSchema = new Schema({
    courseName: {
        type: String,
        require: true
    },
    picture: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    teacher: {
        type: mongoose.Types.ObjectId,
        ref: "Teacher"
    },
    students: [{
        type: mongoose.Types.ObjectId,
        ref: "Students"
    }],
    assignments: [{
        type: mongoose.Types.ObjectId,
        ref: "Assignments"
    }],
    reviews: [{
        type: mongoose.Types.ObjectId,
        ref: "Reviews"
    }]
}, { timestamps: true })

const Courses = models.Courses || model('Courses', coursesSchema);
export default Courses;
