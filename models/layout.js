const mongoose = require('mongoose')

const Schema = mongoose.Schema

const layoutSchema = new Schema({
    //layoutName: String,
    header_names: [String],
    auditId: {
        type: Schema.Types.ObjectId,
        ref: 'Audit'
    },
    audit_steps: {
        steps: [
            {
                stepId: { type: Schema.Types.ObjectId, ref: 'Steps'},
                name: { type: String }
            }
        ]
    }
    //names: [String],
    // steps: [Number],
    // step_names: [String]
})

module.exports = mongoose.model("Layout", layoutSchema)