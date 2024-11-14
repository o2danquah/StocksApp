
const whitelist = ["www.google.com", "http://localhost:8081"]

const corsOption = {
    origin : (origin, callback) => {
        //  if(whitelist.indexOf(origin) !== -1){
        //     callback(null, true)
        //  }
        //  else{
        //     callback(new Error("Cannot be found"))
        //  }
    }, 
    optionsSuccessStatus: 200
}

module.exports = corsOption