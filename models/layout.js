const mongoose = require('mongoose')

const Schema = mongoose.Schema

const layoutSchema = new Schema({
    header_names: [String]
    //names: [String],
    // steps: [Number],
    // step_names: [String]
})

module.exports = mongoose.model("Layout", layoutSchema)