// import React, { useState } from 'react'
// import Validation from '../components/validation'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'

// const Login = () => {
//     const navigate = useNavigate();
//     const [logs, setLogs] = useState({
//         email: "",
//         pass: ""
//     })

//     const [errors, setErrors] = useState({})

//     const handleInput = (event) => {
//         setLogs( prev => ({...prev, [event.target.name] : [event.target.value]}))


//    }

//     const handleSubmit = (event) => {
//          event.preventDefault();
//          setErrors(Validation(logs));
//          if(errors.email === "" && errors.pass === ""){
//             axios.post("http://localhost:8081/", logs).then(res => {
//              if(res.data === "success"){
//                 navigate("/welcomepage")
//              }
//              else{
//                 alert("No records found in database")
//              }
             
//             }).catch(err => console.log( "Error" + err));

//          }
         
//     }
   

import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
     
    const Login = () => {
        const navigate = useNavigate();
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [Mailerror, setMailError] = useState('');
        const [Passworderror, setPassError] = useState('');
           
        const onLogin = (e) => {
            e.preventDefault();
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/welcomepage")
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (email === " "  || password === " "){
                  setMailError("Input Email");
                  setPassError("Input Password");
                }
                if (errorMessage === "Firebase: Error (auth/invalid-email)."){
                  setMailError("Invalid Email")
                }
                if (errorMessage === "Firebase: Error (auth/missing-password)."){
                  setPassError("Invalid Password")
                }
                
                console.log( errorMessage)
            });
           
        }



  return (
    <React.Fragment>
        <div className="limiter">
  <div className="container-login100">
    <div className="wrap-login100">
      <div className="login100-pic js-tilt" data-tilt>
        <img src="images/StockzLogo3.png" alt="IMG" />
      </div>
      <form className="login100-form" action='' >
        <span className="login100-form-title">
          Member Login
        </span>
        <div className="wrap-input100" >
          <input className="input100" type="text" name="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
          <span className="focus-input100" />
          <span className="symbol-input100">
            <i className="fa fa-envelope" aria-hidden="true" />
          </span>
        
        </div>
        <div className="wrap-input100 validate-input" onChange={(e) => {setPassword(e.target.value)}}>
          <input className="input100" type="password" name="pass" placeholder="Password" />
          <span className="focus-input100" />
          <span className="symbol-input100">
            <i className="fa fa-lock" aria-hidden="true" />
          </span>
          
        </div>
        <div className="container-login100-form-btn">
          <button type='submit' className="login100-form-btn" onClick={onLogin}>
            Login
          </button>
        </div>
        <div className="text-center p-t-12">
          
          
        </div>
        <div className="text-center p-t-136">
        <span className='text-danger'> {Mailerror || Passworderror}</span>
        </div>
      </form>
    </div>
  </div>
</div>

	
    </React.Fragment>
  )
}

export default Login