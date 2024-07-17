function Validation(logs){
   let errors = {};

    const email_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const password_pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/


    if(logs.email === ""){
        errors.email = "Name should not be empty"
    }

    else if(!email_pattern.test(logs.email)){
        errors.email = "Email does not match"
    }
    else{
        errors.email = ""
    }


    if(logs.pass === ""){
        errors.pass = "Password should not be empty"
    }

    else if(!password_pattern.test(logs.pass)){
        errors.pass = "Password does not match"
    }
    else{
        errors.pass = ""
    }
    

    return errors

}

export default Validation;