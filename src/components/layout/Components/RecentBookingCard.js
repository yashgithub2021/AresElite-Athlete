import React from 'react'
import { useNavigate } from 'react-router-dom'
const RecentBookingCard = () => {
    const navigate=useNavigate()
  return (
    <div style={{fontSize:"small"}}>
    <div className='d-flex justify-content-between'>
        <p>Name</p>
        <p>Raj K</p>
    </div>
    <div className='d-flex justify-content-between'>
        <p>Service Type</p>
        <p>Sports Vision Performance</p>
    </div>
    <div className='d-flex justify-content-between'>
        <p>Date</p>
        <p>18/03/24</p>
    </div>
    <div className='d-flex justify-content-between'>
        <p>Service</p>
        <p>9:23 AM</p>
    </div>
    <div className=''>
        <p>Action</p>
        <div className="d-flex gap-3">
            <button style={{padding:"12.5px 26.5px 12.5px 26.5px",background:"#7257FF26",borderRadius:"10px",width:"50%"}}>View prescription</button>
            <button style={{padding:"12.5px 26.5px 12.5px 26.5px",background:"#7257FF",borderRadius:"10px",width:"40%",color:"white"}} onClick={()=>{navigate("/a-drill")}}>Start drill</button>
        </div>
    </div>
    </div>
  )
}

export default RecentBookingCard