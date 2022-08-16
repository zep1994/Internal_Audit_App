const mongoose = require('mongoose')

const Schema = mongoose.Schema

const stepsSchema = new Schema({
    step_names: [String]
})

module.exports = mongoose.model("Steps", stepsSchema)