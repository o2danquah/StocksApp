const mongoose = require("mongoose")

const dbcon = mongoose.connect("mongodb+srv://papa10058:Layzer2511@stocks.cjlx8n6.mongodb.net/?retryWrites=true&w=majority&appName=Stocks").then(()=>{
    console.log("Databse is running")
}).catch((err)=>{
    console.log(err)
})

module.exports = dbcon