const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser");
const UserModel = require("./DrugsSchema")
const db  = require("./dbconnection")
const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
db();
app.use(express.json())


// nodeCron.schedule("30 * * * * *", () => {
//     console.log("Active")
//     UserModel.find().then(async(Drugs)=>{
//         let drugArr = [];
//         drugArr = await Drugs;
//         var expiredDrugs = drugArr.filter((index, i) => {
//             let aDate = index.DateExpiry;
//             console.log(aDate)
//             const truncatedDate = new Date(aDate).toLocaleDateString('en-CA', {year: 'numeric', month: '2-digit', day: '2-digit'})
      
//                 const startDate = new Date();
     
//                 const endDate = new Date(truncatedDate);
//                 return (differenceInCalendarMonths(endDate,startDate) == 1 || differenceInCalendarMonths(endDate,startDate) <=3)
//         })

//         function  sendmail(){

            
            
//             return new Promise((resolve, reject) => {
               
//                 var transporter = nodemailer.createTransport({
//                       service: "gmail",
//                       auth: {
//                          user:"papa10058@gmail.com",
//                          pass: "sqdqdxaoximzgypv"
//                       }

//                 })        
                
                
     
//                 const mail_option = {
//                  from:"papa10058@gmail.com",
//                  to:"hendrixomar66@gmail.com",
//                  subject: "Drugs Expiring Soon",
//                  html: `<h3>Drug Store<h3/>
//                  <ul><h2> ${
                 
//                    expiredDrugs.map((value) => {
//                     const myexpiry = value.DateExpiry;
//                     const truncatedDate = new Date(myexpiry).toLocaleDateString('en-CA', {year: 'numeric', month: '2-digit', day: '2-digit'})
//                     const endDate = new Date(truncatedDate);
//                     const date = new Date()
//                     console.log(value.DrugName + " "  + "expires in" + " " + differenceInCalendarMonths(endDate,date) + " " + "Months" );
//                     return (value.DrugName + " "  + "expires in" + " " + differenceInCalendarMonths(endDate,date) + " " + "Months")
//                    })
//                    }  </h2></ul>`
//                 }
//                 transporter.sendMail(mail_option, function (error, info) {
//                      if(error){
//                          return reject({message: "error occured"})
//                      }
//                      return resolve({message: "message sent successfully"})
//                 })
//              })
        
         
         
//         }
//         if(expiredDrugs === undefined || expiredDrugs.length == 0){
//             console.log("No expired Drugs")
//         }
//         else{
//             sendmail();
//         }
        
        
//     })
// } )


app.get('/', (req, res) =>{
    res.send("Stocks Server is active")
})


app.post("/druginput", async (req, res) => {
    try {
        let Drugs = new UserModel(req.body);
    let data = await Drugs.save()
    res.send(data)
    
    } catch (error) {
       res.status(200).json("Cannot input drug")    
    }

})


app.get("/showdrugs", (req, res) => {
     try{
        UserModel.find().then(async(Drugs) =>{
            let drugArr = [];
            drugArr = await Drugs
            res.json(drugArr) 
}).catch(err => res.json(err))
        
     }
     catch(error){
          res.status(200).json("Problem occured")
     }
    
     
    
})






        

      
        




   
   
   
    


app.listen(8081, () => {
    console.log("listening...");
})

