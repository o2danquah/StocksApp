const db = require("../dbconnection")
const UserModel  = require("../DrugsSchema")
const nodemailer = require("nodemailer");
const { differenceInCalendarMonths } = require("date-fns");
console.log("Active wai")
db()
UserModel.find().then(async(Drugs)=>{
    
    let drugArr = [];
    drugArr = await Drugs;
    var expiredDrugs = drugArr.filter((index, i) => {
        let aDate = index.DateExpiry;
        console.log(aDate)
        const truncatedDate = new Date(aDate).toLocaleDateString('en-CA', {year: 'numeric', month: '2-digit', day: '2-digit'})
  
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
             
               expiredDrugs.map((value) => {
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
    if(expiredDrugs === undefined || expiredDrugs.length == 0){
        console.log("No expired Drugs")
    }
    else{
        sendmail();
    }
    
    
})