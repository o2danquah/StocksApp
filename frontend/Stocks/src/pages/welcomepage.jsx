import React from 'react'
import { Link } from 'react-router-dom'

const WelcomePage = () => {
  return (
    <React.Fragment>
      <div>
        <section className="vh-100 gradient-custom">
    <div className="container py-5 h-100 ">
      <div className="d-flex justify-content-center align-items-center h-100 pt-5">
      
          <div className="card" style={{borderRadius: '1rem', background: 'white'}}>
           
            <div className="card-body p-5 text-center">
                <label style={{fontFamily:"sans-serif", fontSize:"40px"}}>Welcome to Stockz</label>
                 
                 
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
    </React.Fragment>
    
  )
}

export default WelcomePage