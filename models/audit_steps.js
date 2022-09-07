const mongoose = require('mongoose')

const Schema = mongoose.Schema

const auditstepSchema = new Schema({
    audit_id: {
        type: Schema.Types.ObjectId,
        ref: 'Audit'
    },
    steps: [{ header: String, step: String }]
})

module.exports = mongoose.model("Audit_Step", auditstepSchema)