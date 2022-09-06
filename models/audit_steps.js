const mongoose = require('mongoose')

const Schema = mongoose.Schema

const stepSchema = new Schema({
    audit_id: {
        type: Schema.Types.ObjectId,
        ref: 'Audit'
    },
    header: String,
    name: [String],
})

module.exports = mongoose.model("Step", stepSchema)