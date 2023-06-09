const mongoose = require('mongoose')

const loanSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    customerEmail: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value),
            message: (props) => `${props.value} is not a valid email address`
        },
    },
    loanAmount: {
        type: Number,
        min: 1,
        required: true
    },
    interest:{
        type: Number,
        min: 0.0,
        max: 25.0,
        required: true

    },
    loanType: String,
    loanTermYears: {
        type: Number,
        min: 1,
        max: 30,
        required: true
    }, 
    insertedDate: {
        type: Date,
        default: Date.now
    }
})

const Loan = mongoose.model('Loan', loanSchema)
module.exports = Loan