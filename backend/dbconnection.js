const mongoose = require("mongoose")

const dbcon = mongoose.connect("mongodb://localhost:27017/").then(()=>{
    console.log("Databse is running")
}).catch((err)=>{
    console.log(err)
})

module.exports = dbcon