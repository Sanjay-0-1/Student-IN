import React from 'react'
import Ei from '../../assets/Ei.png'
import C1 from '../../assets/C1.png'
import C2 from '../../assets/C2.png'
import C3 from '../../assets/C3.png'
import A1 from '../../assets/A1.png'
import A2 from '../../assets/A2.png'
import A3 from '../../assets/A3.png'
import './Ex.scss'

export default function Ex() {
  return (
    <div className='EX'>
        <div className='head'>
            <h1 className='E' align='center'>Explore<br />
            Learn<br />
            Practice<br />
            Repeat
            </h1>
        </div>
        <div className='im'><img src={Ei} /></div>
        <div className='Arrow'>
            <img src={C1} className='c1'/>
    
            <img src={C2} className='c2'/>
            <img src={C3} className='c3'/>
            <img src={A1} className='a1'/>
            <img src={A2} className='a2'/>
            <img src={A3} className='a3'/>
        </div>
        <div><h1 className='Exp'> E</h1>
        <h1 className='Le'> L</h1>
        <h1 className='Pr'> P</h1></div>
    </div>
  )
}
