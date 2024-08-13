import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import axios from "axios";
import { FETCH_STATUS } from '../components/Status';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


const DrugInputs = () => {

  const [open, setOpen] = useState(false)
const [Errors, setError] = useState("")
 const [Status, setStatus] = useState("")
 const [DrugName, setDrugName] = useState('');
 const [DrugCategory, setCategory] = useState('');
 const [DrugQuantity, setQuantity] = useState('');
 const [DrugID, setID] = useState('');
 const [DateExpiry, setExpiryDate] = useState('');


 const loader = () => {
  if(Status === "loading" || Status === "idle")
  return <div>
  <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 , }} open={open}>
  <CircularProgress color="inherit" open={open}/>
  </Backdrop>  
 </div>
 }

 const alerter = () => {
  if(Status === "error"){
    return <div className='row justify-content-center fixed-bottom '>
      <Stack sx={{ width: '60%' }} spacing={2}>
      <Alert severity="error"> {Errors} </Alert>
    </Stack>
    </div>
  }
  if(Status === "success"){
    return <div className='row justify-content-center fixed-bottom '>
      <Stack sx={{ width: '60%' }} spacing={2}>
      <Alert severity="success">Data Successfully Sent </Alert> 
    </Stack>
    </div>
  }
 }

 const handleSubmit = (event) => {
    setOpen(true)
    setStatus(FETCH_STATUS.LOADING)
    event.preventDefault();
    const currDay = new Date().toLocaleString("en-US", { day : '2-digit'})
    const currMonth = new Date().toLocaleString("en-US", { month: "2-digit" })
    const currYear = new Date().getFullYear();
    const DateAdded = currYear + "-" + currMonth + "-" + currDay;   
    console.log(Status)
      try {  
        setTimeout(async() => {
        let response = await axios.post("https://stocks-app-server.vercel.app/druginput", {DrugName, DrugCategory, DrugID, DrugQuantity, DateExpiry, DateAdded})
        console.log("This is the")
        setStatus(FETCH_STATUS.SUCCESS) 
        setOpen(false)
        }, 7000);
        
      
      
        
        
      } catch (err) {
        setError(err.message)
        setStatus(FETCH_STATUS.ERROR)
      }
    
   
    
 }


 
 
  return (
    <div>
        <section className="vh-100 gradient-custom">

    <div className="container py-5 h-100 ">
      {loader()}
      <div className="d-flex justify-content-center align-items-center h-100 pt-5">
      {alerter()}
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