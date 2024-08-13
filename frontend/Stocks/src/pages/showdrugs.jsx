import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ReactLoading from 'react-loading'
import { FETCH_STATUS } from '../components/Status'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


const wait = (ms) => new Promise((rs) => setTimeout(rs,ms))

const Showdrugs = () => {


const [drugs, setValues] = useState([]);
const [Status, setStatus] = useState(FETCH_STATUS.IDLE)
const [Errors, setErrors] = useState("")
const [open, setOpen] = useState(true)

const getDrugs = async () => {
     try {
      console.log(Status)
         
    let response  =  await axios.get("https://stocks-app-server.vercel.app/showdrugs/")

     setStatus(FETCH_STATUS.LOADING)
     setValues(response.data)
     if (drugs){
      setStatus(FETCH_STATUS.SUCCESS)
     }
     } catch (err) {
      setErrors(err.message)
      setStatus(FETCH_STATUS.ERROR)
     }
}



useEffect(() => {
setTimeout(() => {
  getDrugs()
}, 5000);
}, [])



// const isLoading = Status === FETCH_STATUS.LOADING;
// const isFailed = Status === FETCH_STATUS.ERROR;
// const isSuccess = Status === FETCH_STATUS.SUCCESS;




// const handleDelete = async (id) => {
//   try {
//     await axios.delete("https://stocks-app-server.vercel.app/showdrugs"+id)
//     window.location.reload()
//   } catch (error) {
//     console.log(error)
//   }
// }
 


const Loader = () => {
  if(Status === "loading" || Status === "idle"){
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

  return (
    <React.Fragment>

<div className='Show-Drugs'>
    <h2>AVAILABLE DRUGS</h2> 
 {Loader()}
 <div className='h-100 d-flex align-items-center justify-content-center pt-2 p-5'>


 <table className="table table-dark p-5">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Drug name</th>
      <th scope="col">Drug Category</th>
      <th scope="col">Quantity</th>
      <th scope="col">Date added</th>
      <th scope="col">Expiry Date</th>
      <th scope='col'></th>
    
    </tr>
  </thead>
  <tbody>
    {
    drugs.map((data, i) => (
        
        <tr>
        <td></td>    
        <td>{data.DrugName} </td>
        <td> {data.DrugCategory}</td>
        <td> {data.DrugQuantity}</td>
        <td> {data.DateAdded}</td>
        <td> {data.DateExpiry}</td>
        <td> 
            <Link to={`/update/${data._id}`} className='btn btn-primary'>Update</Link>
            <button className='btn btn-danger ms-2'>Delete</button>
        </td>
       
        </tr>
    ))
    }
     
      
  </tbody>
</table>

 </div>
<div className='d-flex align-items-center justify-content-center'>
<Link to="/druginput" className='btn btn-success' style={{width:"130px", }}> Add</Link>

</div>

</div> 
{Alerter()}
    </React.Fragment>
  )
}
export default Showdrugs;

