const mongoose = require('mongoose')

const Schema = mongoose.Schema

const auditSchema = new Schema({
    audit: [String],
    layoutId: {
        type: Schema.Types.ObjectId,
        ref: 'Layout'
    }
})

module.exports = mongoose.model("Audit", auditSchema)