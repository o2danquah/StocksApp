
const { getEmployeeData, postEmployeeData } = require("../Service/queryEmployee")

const showEmployee = async(req, res) => {
   try {
    const employee = await getEmployeeData
    return res.json(employee)
    
   } catch (error) {
      res.status(200).json("Cannot find employees")
   }
}

const inputEmployee = async (req, res) => {
    try {
        const data = await postEmployeeData(req.body)
        return res.json(data)
    } catch (error) {
        res.status(200).json("Cannot add employee")
    }
}

module.exports = {inputEmployee, showEmployee}