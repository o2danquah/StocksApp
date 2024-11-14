const mongoose = require("mongoose")

const EmployeeSchema = mongoose.Schema({
    EmployeeID: String,
    EmployeeName: String,
    EmployeePosition: String,
    EmployeeYOS : Number,
    EmployeePhoneNo : String, 
    EmployeeDOB : Date
})

const EmployeeModel = mongoose.model("Employee", EmployeeSchema)
module.exports = EmployeeModel