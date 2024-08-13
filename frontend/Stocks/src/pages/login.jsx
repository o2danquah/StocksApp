
import React, {useState} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { FETCH_STATUS } from "../components/Status"
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
     
    const Login = () => {
        const navigate = useNavigate();
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [Errors, setError] = useState('');
        const [Status, setStatus] = useState("");
        const [open, setOpen] = useState(true)
        

        const loader = () => { 
          if(Status === "idle"  || Status === "loading"){
            return <div>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 , }} open={open}>
            <CircularProgress color="inherit" open={open}/>
            </Backdrop>  
           </div>
          }
            
          
          
        }

        const Alerter = () => {
          if(Errors){
            return <div className='row justify-content-center fixed-bottom '>
              <Stack sx={{ width: '60%' }} spacing={2}>
              <Alert severity="error"> {Errors} </Alert>
            </Stack>
            </div>
          }
        }
           
        const onLogin = async(e) => {
          setOpen(true)
          console.log(Status)
           setStatus(FETCH_STATUS.IDLE)
            e.preventDefault();
            await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                setStatus(FETCH_STATUS.SUCCESS)
                const user = userCredential.user;
                console.log(Status)
                if(user){
                  setOpen(false)
                  navigate("/welcomepage")
                }
            })
            .catch((error) => {
              setOpen(false)
                const errorCode = error.code;
                const errorMessage = error.message;
                if (email === " "){
                  setError("Please enter your username or email");
                 
                }
                if(password === " "){
                  setError("Please enter your password");
                  
                }
                if(password === " "  && email === " "){
                  setError("Hey!, inputs are empty"); 
                }
                if (errorMessage === "Firebase: Error (auth/invalid-email)."){
                  setError("Invalid Email")
                  
                }
                if (errorMessage === "Firebase: Error (auth/missing-password)."){
                  setError("Oops, forgotten Password?")
                 
                }
                if(errorMessage === "Firebase: Error (auth/invalid-credential)."){
                  setError("Invalid Credentials")
                }
                
                
                
                console.log( errorMessage)
            });
           
        }



  return (
    <React.Fragment>
        <div className="limiter">
          {loader()}
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
        <span className='text-danger'> </span>
        {Alerter()}
        </div>
      </form>
    </div>
  </div>
</div>

	
    </React.Fragment>
  )
}

export default Login