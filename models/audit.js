const mongoose = require('mongoose')

const Schema = mongoose.Schema

const auditSchema = new Schema({
    audit: [String]
})

module.exports = mongoose.model("Audit", auditSchema)