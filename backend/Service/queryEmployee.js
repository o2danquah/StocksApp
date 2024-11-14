const EmployeeModel = require("../model/EmployeeSchema")


const getEmployeeData = () => {
    const employeedata = EmployeeModel.find({})
    return employeedata
}

const postEmployeeData =async (data) => {
    try {
    const receivedData = data;
    await EmployeeModel(receivedData).save()
    return "Successfully added to database"
    } catch (error) {
        return "Problem saving employee"
    }
}

module.exports = {getEmployeeData, postEmployeeData}