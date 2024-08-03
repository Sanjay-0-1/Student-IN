import React from 'react'
import "./lg.scss"
import Lo from "../../assets/Lo.png"
import { useNavigate } from "react-router-dom";



export default function Lg() {
  let navigate = useNavigate();
  return (
    
   <div className='lg'>
   <img  src= {Lo} className='wel-logo' alt='logo'/>
   <div className='text'><p>Welcome to your student community</p></div>
   <div className='btn'>
    <div className='in-btn'>
    <span className='in-btn' onClick={() => navigate('/SignIn')}>Sign<span className='yellow'>IN</span></span>
      <span className='new-btn' onClick={() => navigate('/Signup')}>SignUP</span>

    </div>
   </div>
   </div>
  
   
  )
}
