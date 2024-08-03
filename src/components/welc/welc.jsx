import React from 'react'
import "../welc/welc.scss"
import Navbar from '../nav/Navbar'
import { useNavigate } from "react-router-dom";



export default function Welc() {
  let navigate = useNavigate();
  return (
    <header>
        <div className='nav'><Navbar /></div>
        <div className='Heading'>
            <div className='cta'>
            <p className='Name'>Don't stop when you're tired stop when you're DONE</p>
            <span className='start-btn' onClick={() => navigate('/Signup')}>Get Started</span>
            </div>
        </div>
    </header>
   
  )
}
