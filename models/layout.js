const mongoose = require('mongoose')

const Schema = mongoose.Schema

const layoutSchema = new Schema({
    
    //header_names: [String],
    auditId: {
        type: Schema.Types.ObjectId,
        ref: 'Audit'
    },
    steps: {
        type: Schema.Types.ObjectId,
        ref: 'AuditStep'
    }
    //stepId: [{ type: Schema.Types.ObjectId, ref: 'Steps'}]
})

module.exports = mongoose.model("Layout", layoutSchema)