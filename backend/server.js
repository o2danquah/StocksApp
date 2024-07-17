const express = require("express");
const mysql = require("mysql")
const cors = require("cors")
const mongoose = require("mongoose")
const nodemailer = require("nodemailer");
const { differenceInCalendarMonths } = require("date-fns");
const nodeCron = require("node-cron");
const UserModel = require("./DrugsSchema")
// const dbconnection  = require("./")
const app = express();
app.use(cors());
app.use(express.json())


mongoose.connect("mongodb://0.0.0.0:27017/Drugs").then(() => {
    console.log("Database running")
}).catch((err) => {
    console.log(err)
})





app.get('/', (req, res) =>{
    res.json("Server is active")
})


app.post("/druginput", async (req, res) => {
    let Drugs = new UserModel(req.body);
    let data = await Drugs.save()
    res.send(data)
    

})


app.get("/showdrugs", (req, res) => {
     UserModel.find().then((Drugs) =>{
        res.json(Drugs)
     }).catch(err => res.json(err))
    
     UserModel.find().then((Drugs) => {
        let a = [];
        a = Drugs;
        var myvar = a.filter((index, i) => {        
            let myexpiry = index.DateExpiry;
            const truncatedDate = new Date(myexpiry).toLocaleDateString('en-CA', {year: 'numeric', month: '2-digit', day: '2-digit'})
  
            const startDate = new Date();
 
            const endDate = new Date(truncatedDate);
            return (differenceInCalendarMonths(endDate,startDate) == 1 || differenceInCalendarMonths(endDate,startDate) <=3)
        
        })
        
        function  sendmail(){
        
            return new Promise((resolve, reject) => {
           
                var transporter = nodemailer.createTransport({
                      service: "gmail",
                      auth: {
                         user:"papa10058@gmail.com",
                         pass: "sqdqdxaoximzgypv"
                      }

                })        
                
                
     
                const mail_option = {
                 from:"papa10058@gmail.com",
                 to:"hendrixomar66@gmail.com",
                 subject: "Drugs Expiring Soon",
                 html: `<h3>Drug Store<h3/>
                 <ul><h2> ${
                   myvar.map((value) => {
                    const myexpiry = value.DateExpiry;
                    const truncatedDate = new Date(myexpiry).toLocaleDateString('en-CA', {year: 'numeric', month: '2-digit', day: '2-digit'})
                    const endDate = new Date(truncatedDate);
                    const date = new Date()
                    console.log(value.DrugName + " "  + "expires in" + " " + differenceInCalendarMonths(endDate,date) + " " + "Months" );
                    return (value.DrugName + " "  + "expires in" + " " + differenceInCalendarMonths(endDate,date) + " " + "Months")
                   })
                   }  </h2></ul>`
                }
                transporter.sendMail(mail_option, function (error, info) {
                     if(error){
                         return reject({message: "error occured"})
                     }
                     return resolve({message: "message sent successfully"})
                })
             })
        
         
         
        }

        nodeCron.schedule("10 * * * * *", () => {
            console.log("working")
            sendmail();
        })

     })
    
     
    
})




// app.get("/showdrugs", (req, res) => {

//    UserModel.find().then(
//     drugs => res.json(drugs)
//    ).catch(err => res.json(err))

  

 
    
       
        
    
        // req.list = json;

        

      
        




   
   
   
    


app.listen(8081, () => {
    console.log("listening...");
})
