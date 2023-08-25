import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    user_id: {
        type: String,
    },
    image: {
        type: String,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    role: {
        type: String,
        enum: ["Student", "Teacher", "User"],
        default: 'User'
    },
    enrolled_courses: [],
    created_courses: []
}, { timestamps: true })

const User = models.user || model('user', userSchema);

export default User;