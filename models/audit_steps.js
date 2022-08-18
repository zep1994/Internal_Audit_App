const mongoose = require('mongoose')

const Schema = mongoose.Schema

const stepsSchema = new Schema({
    step_names: [String],
    layoutId: {
        type: Schema.Types.ObjectId,
        ref: 'Layout'
    }
})

module.exports = mongoose.model("Steps", stepsSchema)