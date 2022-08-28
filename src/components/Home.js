import React from 'react'
import './Home.css'

function Home() {
  return (
    <>
    <div className='frame'>
     <div className="framechild">
     <p className="t1">Home / Delhi NCR / Home Cleaning</p>
      <p className="t2">Top House Cleaning Services in Delhi NCR</p>
      <div className="inputcon">
      <div className="inputbox1">
        <select name="pestopt" id="" value="" className='select1'>
            <option value="111">Select Pest Control-Options</option>
        </select>
        <div className="namenum1">
          <div className="n11">
          <input type="text" name="" id="" placeholder='Enter Name' className='name1' />
          </div>
          <div className="n111">
          <input type="text" name="" id="" placeholder='Phone Number' className='num1'/>
          <input type="text" name="" id="" placeholder='Alternate Number' className='num11' />
          </div>
        </div>
        <input type="text" name="" id="" placeholder='Pincode or Address' className='pin1'/>
        <button className="submit1">Submit</button>
        <p className="pi1">Average call back time : 12 min <p className='s'> (Last update 5 mins ago)</p></p>
     </div>
    </div>
      </div>
    </div>
    <div className="fcon">
      <p className="ftitle">House Cleaning Services in Delhi NCR :</p>
      <p className="fcontent">Get home cleaning services in Delhi NCR, India. We have Well Equipped and Trained Team, who carries out Deep House Cleaning and Sanitization with Non-Hazardous Chemicals. Book well-trained and experienced team from OyeBusy to get your home deep cleaned thoroughly at your chosen time and location. We offer the most affordable home cleaning services in Delhi NCR, India for studios, apartments, and villas. Book home cleaning services on OyeBusy today.</p>
    </div>
    <div className="br"></div>
    </>
  )
}

export default Home
