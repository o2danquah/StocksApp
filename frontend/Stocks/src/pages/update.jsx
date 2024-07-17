import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const UpdateDrugs = () => {
  
 const [drugname, setDrugName] = useState('');
 const [drugcategory, setCategory] = useState('');
 const [quantity, setQuantity] = useState('');
 const [expirydate, setExpiryDate] = useState('');
 const {id} = useParams();
 const navigate = useNavigate();

 const handleSubmit = (event) => {
    event.preventDefault();
    const currDay = new Date().toLocaleString("en-US", { day : '2-digit'})
    const currMonth = new Date().toLocaleString("en-US", { month: "2-digit" })
    const currYear = new Date().getFullYear();
    const date = currYear + "-" + currMonth + "-" + currDay;

       
    axios.put("http://localhost:8081/update/"+id, {drugname, drugcategory, quantity, expirydate, date}).then(res => {
      console.log(res);
      navigate("/showdrugs")

    }).catch(err => console.log(err));
 }
 
  return (
    <React.Fragment>
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

                 <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}}noValidate autoComplete="off" >
                 <TextField id="outlined-basic" label="Quantity" variant="outlined" name='quantity' color="secondary" onChange={e => setQuantity(e.target.value)}/>
                 </Box>

                 
                 <input type='date' name='expirydate' onChange={event => setExpiryDate(event.target.value)} style={{height: "56px", width: "25ch", textAlign: 'center'}} ></input>
                 
                 
                 <div className="container-login100-form-btn m-t-17 pt-3 ">
                 <button type="submit" className="btn btn-success">
                  Update
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
    </React.Fragment>

  )
}

export default UpdateDrugs