const mongoose = require("mongoose")


const DrugsSchema = mongoose.Schema({
    DrugName: String,
    DrugCategory: String,
    DrugID: String,
    DrugQuantity: Number,
    DateExpiry: Date,
    DateAdded: Date    
})

const DrugsModel = mongoose.model("Drugs", DrugsSchema)
module.exports = DrugsModel;