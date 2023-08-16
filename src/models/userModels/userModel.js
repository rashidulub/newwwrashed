import { Schema, model, models } from "mongoose";


const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
    },
    image: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ["student", "teacher", "user"],
        default: 'user'
    },
    provider: {
        type: String,
        default: 'credentials'
    },
    status: {
        type: String,
        enum: ["active", "inactive", "bloked"],
        default: "inactive"
    }
}, { timestamps: true })

const User = models.user || model('user', userSchema);

export default User;