const mongoose = require('mongoose')

const Schema = mongoose.Schema

const layoutSchema = new Schema({
    auditId: {
        type: Schema.Types.ObjectId,
        ref: 'Audit'
    },
    steps: [{
        "header_field_text_1": "field_text_1",
        "header_field_text_2": "field_text_2"
    }]
    //stepId: [{ type: Schema.Types.ObjectId, ref: 'Steps'}]
})

module.exports