import React from 'react'
import './Footer.css'
import img66 from '../images/playstore.png'
import insta from '../images/insta.png'
import twitter from '../images/twitter.png'
import linkedin from '../images/linkedin.png'
import facebook from '../images/facebook.png'
import youtube from '../images/youtube.png'
import pinterest from '../images/pinterest.png'

function Footer() {
  return (
    <div className='footer'>
     <div className="fs">
     <div className="firstc">
        <a href="/" className="title1">About Us</a>
        <a href="/" className="title2">Blog</a>
        <a href="/" className="title3">Terms & Conditions</a>
        <a href="/" className="title4">Privacy Policy</a>
        <a href="/" className="title5">Offers & Gift Cards</a>
        <a href="/" className="title6">Contact Us</a>
      </div>
      <div className="secondc">
        <a href="/" className="download">Download Oyebusy App</a>
        <img src={img66} alt="" className="img6" />
      </div>
     </div>
      <div className="thirdc">
        <img src={insta} alt="" className="insta" />
        <img src={twitter} alt="" className="twitter" />
        <img src={linkedin} alt="" className="linkedin" />
        <img src={facebook} alt="" className="facebook" />
        <img src={youtube} alt="" className="youtube" />
        <img src={pinterest} alt="" className="pinterest" />
      </div>
      <p className='fourthc'>© 2022 House Cleaning Expert</p>
    </div>
  )
}

export default Footer
