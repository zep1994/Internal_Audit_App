const mongoose = require('mongoose')

const Schema = mongoose.Schema

const auditSchema = new Schema({
    audit: [String],
    workStepId: [{
        type: Schema.Types.ObjectId,
        ref: 'WorkStep'
    }]
})

module.exports = mongoose.model("Audit", auditSchema)