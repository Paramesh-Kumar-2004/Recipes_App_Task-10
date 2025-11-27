import mongoose from "mongoose"


const recipeScheme = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    ingredients: {
        type: Array,
    },
    instructions: {
        type: Array
    }
}, { timestamps: true })

export const Recipe = mongoose.model("Recipe", recipeScheme)