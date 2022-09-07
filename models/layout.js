const mongoose = require('mongoose')

const Schema = mongoose.Schema

const layoutSchema = new Schema({
    headers: [{
        header: String, 
        field: [String]
    }],
    //header_names: [String],
    auditId: {
        type: Schema.Types.ObjectId,
        ref: 'Audit'
    },
    // steps: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Audit_Step'
    // }
    //stepId: [{ type: Schema.Types.ObjectId, ref: 'Steps'}]
})

module.exports = mongoose.model("Layout", layoutSchema)