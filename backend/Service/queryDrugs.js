
const DrugsModel = require("../model/DrugsSchema");



const queryPostDrugs = async() => {
    let drugsArr
    drugsArr = await DrugsModel.find({})
    return drugsArr
    
}

const queryInputDrugs = async(data) => {
   try {
    let drug = DrugsModel(data)
    await drug.save()
    return "saved successfully"
   } catch (error) {
    return error
   }
   
}

module.exports = {
    queryPostDrugs,
    queryInputDrugs
}