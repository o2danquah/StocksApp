import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth } from 'firebase/auth'



const auth = getAuth();



const currentUsr = auth.currentUser


const WelcomePage = () => {
  


  const getCurrentUser = () => {
    if(currentUsr  !== null){
      return currentUsr.email
    }
  }

  
  
 


  return (

      <div>
        <section className="vh-100 gradient-custom">
    <div className="container py-5 h-100 ">
      <div className="d-flex justify-content-center align-items-center h-100 pt-5">
      
          <div className="card" style={{borderRadius: '1rem', background: 'white'}}>
           
            <div className="card-body p-5 text-center">
                <label style={{fontFamily:"sans-serif", fontSize:"40px"}}>Welcome to Stocks {getCurrentUser()}</label>
                 
                 
                 <div className="container-login100-form-btn m-t-17 pt-3 ">
                 <Link to="/druginput" type="view" className="btn btn-primary ms-3">
                  Input Drugs
                  </Link>
                  <Link to="/showdrugs" type="view" className="btn btn-primary ms-3">
                  View Drugs
                  </Link>
                </div>
                
        
              
            
         
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
    
    
  )
}

export default WelcomePage