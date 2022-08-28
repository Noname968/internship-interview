import React from 'react'
import './Navbar.css'
import img1 from '../images/Group7077.png'
import img2 from '../images/cart.png'
import ham from '../images/ham.png'
import { useState } from 'react'
import whatsapp from '../images/Group 1655.png'
import phone from '../images/Phone.png'

function Navbar() {
  const [show,setshow] = useState(false)

  return (
    <nav className='nav'>
      <div className='hamicon' onClick={()=>setshow(!show)}>
        <img src={ham} alt="" className='hamimg' />
      </div>
      <div className="imgs">
        <img src={img1} alt="" className="img11" />
      </div>
      <a href="/" className='navp1'>CLEANING EXPERT</a>
      <div className={show ? "rightalmobil" : "rightal"}>
        <select name="pest" id="" className='pest'>
          <option value="pest">Pest Control</option>
        </select>
        <div className="blanka"></div>
        <select name="pest" id="" className='pest'>
          <option value="pest">Home Cleaning</option>
        </select>
        <div className="blanka"></div>
        <a href="/" className='pest'>Covid Disinfection</a>
        <img src={img2} alt="" className="img110" />
        <a href="/" className="quote">FREE QUOTES</a>
      </div>
      <div className="wpcon">
        <img src={whatsapp} alt=""  className='wp'/>
        <img src={phone} alt=""  className='wp'/>
        </div>
    </nav>
  )
}

export default Navbar
