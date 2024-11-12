import mongoose from "mongoose";

const projectSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        imageRef: {
            type: String,
            required: true,
        },
    }
);

export const Project = mongoose.model('Project', projectSchema);