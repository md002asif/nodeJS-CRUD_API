const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema(
    {
        emp_id: {
            type: Number,
            required:[true],
        },
        name: {
            type : String,
            required: [true,'enter the employee name']
        },
        department:
        {
            type: String,
            required: [true,'enter employee name']
        },
        role:
        {
            type:String,
            required:[true,'enter employee role']
        }
    },
    {
        timestamps: true
    }
)

const employee = mongoose.model('employeeDetails',employeeSchema);

module.exports = employee;