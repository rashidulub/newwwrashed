import mongoose from "mongoose";
import { Schema, model, models } from "mongoose";


const contactSchema = new Schema(
    {
        name: {
            type: String,
        },
        email: {
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

    const Contact = models.contacts || model("contacts", contactSchema);


export default Contact;


