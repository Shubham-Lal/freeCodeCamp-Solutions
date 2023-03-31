const mongoose = require("mongoose");

// Created Exercise schema
const ExerciseSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    description: String,
    duration: Number,
    date: Date,
});

// Exported Exercise schema
module.exports = mongoose.model("Exercise", ExerciseSchema);