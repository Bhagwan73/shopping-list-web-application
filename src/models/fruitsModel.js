const mongoose = require("mongoose")

const fruitsSchema = new mongoose.Schema({
    fruitName: {
        type: String,
        unique: true,
        require: true
    },
    rate: {
        inRupees: { type: String, required: true },
        inDollers: { type: String, required: true }
    }
}, { timestamps: true })

module.exports = mongoose.model("Fruit", fruitsSchema)