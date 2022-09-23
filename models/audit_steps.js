const mongoose = require('mongoose')

const Schema = mongoose.Schema

const auditstepSchema = new Schema({
    workStep_id: {
        type: Schema.Types.ObjectId,
        ref: 'WorkStep'
    },
    steps: [String]
})

module.exports = mongoose.model("AuditStep", auditstepSchema)