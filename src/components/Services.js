import React from 'react'
import './Services.css'
import i1 from '../images/1.png'
import i2 from '../images/2.png'
import i3 from '../images/3.png'
import i4 from '../images/4.png'
import i5 from '../images/5.png'
import i6 from '../images/6.png'
import i7 from '../images/7.png'
import i8 from '../images/8.png'

function Services() {
    return (
        <>
            <div className='servicecon'>
                <p className="servicetitle">Choose Our Services</p>
                <div className="sercon">
                    <p className='hp'>Choose Our Services</p>
                    <div className="con1">
                        <img className='ser1' src={i1} alt="" />
                        <p className="cont1">Sofa Deep Cleaning</p>
                    </div>
                    <div className="con2">
                        <img className='ser2' src={i2} alt="" />
                        <p className="cont2">House Cleaning Services</p>
                    </div>
                    <div className="con1">
                        <img className='ser1' src={i3} alt="" />
                        <p className="cont1">Bathroom Deep Cleaning</p>
                    </div>
                    <div className="con1">
                        <img className='ser1' src={i4} alt="" />
                        <p className="cont1">Kitchen Deep Cleaning</p>
                    </div>
                </div>
            </div>
            <div className="hworks">
                <p className='hworktitle'>How it Works</p>
                <div className="hconn">
                    <div className="hwork1con">
                        <img src={i5} alt="" className="hwork1" />
                    </div>
                    <div className="hworkpcon">
                        <p className="i5p1">Choose the Appliances</p>
                        <p className="i5p2">Select the Service required</p>
                    </div>
                </div>
                <div className="verline"></div>
                <div className="confix">
                <div className="hconn">
                    <div className="hwork1con">
                        <img src={i6} alt="" className="hwork1" />
                    </div>
                    <div className="hworkpcon">
                        <p className="i5p1">Choose your time-slot <span>..</span></p>
                        <p className="i5p2">We serve from 9am-9pm</p>
                    </div>
                </div>
                </div>
                <div className="verline"></div>
                <div className="confix">
                <div className="hconn">
                    <div className="hwork1con">
                        <img src={i7} alt="" className="hwork1" />
                    </div>
                    <div className="hworkpcon">
                        <p className="i5p1" style={{fontSize:"17px"}}>Choose from our partners</p>
                        <p className="i5p2">Verified Professionals</p>
                    </div>
                </div>
                </div>
                <div className="verline"></div>
                <div className="hconn">
                    <div className="hwork1con">
                        <img src={i8} alt="" className="hwork1" />
                    </div>
                    <div className="hworkpcon">
                        <p className="i5p1">Hassle-free service</p>
                        <p className="i5p2">24*7, verifed professionals</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
