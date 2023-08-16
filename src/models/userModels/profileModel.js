import { Schema, model, models } from "mongoose";


const profileSchema = new Schema({
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
        require: true
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
    contactNumber: {
        type: String,
        validate: [validator.IsMobilePhone, "Please provide a valid contact name"]
    },
    address: {
        type: String,
        require: true
    }
}, { timestamps: true })

const Profile = models.user || model('Profile', profileSchema);

export default Profile;