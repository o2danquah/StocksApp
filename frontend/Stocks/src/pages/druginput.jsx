import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';



const DrugInputs = () => {


 
 const [DrugName, setDrugName] = useState('');
 const [DrugCategory, setCategory] = useState('');
 const [DrugQuantity, setQuantity] = useState('');
 const [DrugID, setID] = useState('');
 const [DateExpiry, setExpiryDate] = useState('');
 const navigate = useNavigate();

 const handleSubmit = (event) => {
    event.preventDefault();
    const currDay = new Date().toLocaleString("en-US", { day : '2-digit'})
    const currMonth = new Date().toLocaleString("en-US", { month: "2-digit" })
    const currYear = new Date().getFullYear();
    const DateAdded = currYear + "-" + currMonth + "-" + currDay;      
    axios.post("https://stocks-app-lyart.vercel.app/druginput", {DrugName, DrugCategory, DrugID, DrugQuantity, DateExpiry, DateAdded}).then(res => {
      console.log(res);
      navigate("/showdrugs")

    }).catch(err => console.log(err));
 }
 
  return (
    <div>
        <section className="vh-100 gradient-custom">
    <div className="container py-5 h-100 ">
      <div className="d-flex justify-content-center align-items-center h-100 pt-5">
      
          <div className="card" style={{borderRadius: '1rem', background: 'white'}}>
           
            <div className="card-body p-5 text-center">
              
                <form onSubmit={handleSubmit}>
                <div> Stocks Inputs</div>
                <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}}noValidate autoComplete="off">
                <TextField id="outlined-secondary" label="Drug Name" name='drugname' variant="outlined" color="secondary" onChange={e => setDrugName(e.target.value)}/>
                </Box>

                 <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}}noValidate autoComplete="off" >
                 <TextField id="outlined-basic" label="Drug Catergory" name='drugcategory' variant="outlined" color="secondary" onChange={e => setCategory(e.target.value)}/>
                 </Box> 

                 <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}}noValidate autoComplete="off">
                <TextField id="outlined-secondary" label="Drug ID" name='drugid' variant="outlined" color="secondary" onChange={e => setID(e.target.value)}/>
                </Box>

                 <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}}noValidate autoComplete="off" >
                 <TextField id="outlined-basic" label="Quantity" variant="outlined" name='quantity' color="secondary" onChange={e => setQuantity(e.target.value)}/>
                 </Box>

                 Expiry Date
                 <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}}noValidate autoComplete="off" >
                 
                 <TextField type='date' className='pl-5' variant="outlined" name='expirydate' onChange={event => setExpiryDate(event.target.value)} style={{height: "56px", width: "25ch", textAlign: 'center'}} ></TextField>
                 </Box>
                 
                
                 
                 
                 <div className="container-login100-form-btn m-t-17 pt-3 ">
                 <button type="submit" className="btn btn-success">
                  Submit
                  </button>
                  <Link to="/showdrugs" type="view" className="btn btn-primary ms-3">
                  View Drugs
                  </Link>
                </div>
                
        
                </form>
            
         
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>

  )
}

export default DrugInputs