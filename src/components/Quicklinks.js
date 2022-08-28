import React from 'react'
import './Quicklinks.css'

function Quicklinks() {
  return (
    <>
    <div className='quickcon'>
      <p className='quicktitle'>Quick Links</p>
      <div className="sub1">
        <p className='stit'>Serving in</p>
        <p className="stitinfo">Ludhiana • Kochi • Kanpur • Agra • Bhopal • Guwahati • Vijayawada • Varanasi • Coimbatore • Thiruvananthapuram • Patna • Raipur • Nashik • Jabalpur • Jamshedpur • Dehradun • Meerut • Ranchi • Prayagraj • Amritsar • Gwalior • Kota • Aurangabad • Mysore • Guntur • Cuttack • Udaipur • Ahmedabad • Bangalore • Chennai • Delhi NCR • Chandigarh Tricity • Jaipur • Hyderabad • Kolkata • Mumbai • Pune • Nagpur • Visakhapatnam • Vadodara • Lucknow • Bhubaneswar • Surat • Indore • Rajahmundry • Madurai • Jodhpur • Kakinada • Warangal • Sonipat • Panipat • Karnal • Rohtak • Alwar </p>
      </div>
      <div className="sub1">
        <p className='stit'>Also available in</p>
        <p className="stitinfo">Full House Cleaning Service in Delhi NCR, India • Full House Cleaning Service in Kharkhari Jatmal, South Delhi, Delhi NCR, India • Full House Cleaning Service in Raja Garden, West Delhi, Delhi NCR, India • Full House Cleaning Service in Badusarai, South Delhi, Delhi NCR, India • Full House Cleaning Service in Nizamuddin West, South Delhi, Delhi NCR, India • Full House Cleaning Service in Kapashera, South Delhi, Delhi NCR, India • Full House Cleaning Service in Budh Vihar, North Delhi, Delhi NCR, India • Full House Cleaning Service in Karam Pura, West Delhi, Delhi NCR, India • Full House Cleaning Service in Yusuf Sarai, South Delhi, Delhi NCR, India • Full House Cleaning Service in Mandawali, East Delhi, Delhi NCR, India • <a href="/" style={{color:"black",fontWeight:700}}>See more</a></p>
      </div>
      <div className="sub1">
        <p className='stit'>Services Offered</p>
        <p className="stitinfo">Sofa Cleaning in Delhi NCR, India • Bathroom Cleaning in Delhi NCR, India • Kitchen Cleaning in Delhi NCR, India • Office Cleaning in Delhi NCR, India • Car Cleaning in Delhi NCR, India</p>
      </div>
    </div>
    <div className="inputbox">
        <select name="pestopt" id="" value="" className='select'>
            <option value="111">Select Pest Control-Options</option>
        </select>
        <div className="namenum">
          <input type="text" name="" id="" placeholder='Enter Name' className='name' />
          <input type="text" name="" id="" placeholder='Phone Number' className='num'/>
        </div>
        <input type="text" name="" id="" placeholder='Pincode or Address' className='pin'/>
        <button className="submit">Submit</button>
        <p className="pi">Average call back time : 12 min (Last update 5 mins ago)</p>
    </div>
    </>
  )
}

export default Quicklinks
