import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
    },
    image: {
        type: String,
    },
    email: {
        type: String,
    }
}, { timestamps: true })

const User = models.user || model('user', userSchema);

export default User;