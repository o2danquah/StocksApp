import  { useEffect, useRef, useState } from 'react'


const User_Regex  = /^[0-9A-Za-z]{4,16}$/;
const Passwd_Regex = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/; 

const HmsLoginPage = () => {

    const userRef = useRef()
    const errorRef = useRef()

     
    const [username, setusername] = useState("")
    const [verifyusername, setverifyusername] = useState(false)
    const [usernameFocus, setusernameFocus] = useState(false)

    const [passwd, setpasswd] = useState("")
    const [verifypasswd, setverifypasswd] = useState(false)
    const [passwdFocus, setpasswdFocus] = useState(false)

    const [errMsg, seterrMsg] = useState("")
    const [successMsg, setsuccessMsg] = useState(false)

  
    useEffect(() => {
        userRef.current.focus()
     }, [])

   useEffect(() => {
    const result = User_Regex.test(username)
    console.log(result)
    console.log(username)
    setverifyusername(result)
    
    }, [username])

    useEffect(() => {
        const result = Passwd_Regex.test(passwd)
        console.log(result)
        setverifypasswd(result)
        
        }, [passwd])

    
    
    useEffect(() => {
      seterrMsg('')
    }, [username,passwd])

  return (
    <>
    <div className="limiter">
      
      <div className="container-login100">
      <div className="wrap-login100">
        <div className="login100-pic js-tilt" data-tilt>
          <img src="images/StockzLogo3.png" alt="IMG" />
        </div>
        <section>
          <p ref={errorRef} className={errMsg ? "error" : "offscreen"} aria-live="assertive">{errMsg}</p>
        </section>
        <form className="login100-form"  >
          <span className="login100-form-title">
            Member Login
          </span>
          <div className="wrap-input100" >
            <input className="input100" type="text" name="email" placeholder="Email" ref={userRef} aria-invalid={verifyusername ? "false" : "true"} aria-describedby='uidnote' onChange={(e) => {setusername(e.target.value)}} onBlur={() => {setusernameFocus(false)}} onFocus={() => {setusernameFocus(true)}} />
            <span className="focus-input100" />
            <span className="symbol-input100">
              <i className="fa fa-envelope" aria-hidden="true" />
            </span>
            <p id='uidnote' className={!verifyusername && username && usernameFocus ? "instruction" : "hide"}>
              Invalid username, try again
            </p>
          
          </div>
          <div className="wrap-input100 validate-input" >
            <input className="input100" type="password" name="pass" placeholder="Password" aria-invalid={verifypasswd ? "false" : "true"} aria-describedby='pwdnote' onChange={(e) => {setpasswd(e.target.value)}} onFocus={() => {setpasswdFocus(true)}} onBlur={() => {setpasswdFocus(false)}}/>
            <span className="focus-input100" />
            <span className="symbol-input100">
              <i className="fa fa-lock" aria-hidden="true" />
            </span>
            <p id='pwdnote' className={!verifypasswd && passwd && passwdFocus ? "instruction" : "hide"}>
              Invalid Password, try again
            </p>
            
          </div>
          <div className="container-login100-form-btn">
            <button type='submit' className="login100-form-btn">
              Login
            </button>
          </div>
          <div className="text-center p-t-12">
            
            
          </div>
          <div className="text-center p-t-136">
          <span className='text-danger'> </span>
          
          </div>
        </form>
      </div>
      </div>
      </div>
      
    </>


  )
}

export default HmsLoginPage