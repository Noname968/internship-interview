import React from 'react'
import smg1 from '../images/s1.png'
import smg2 from '../images/s2.png'
import smg3 from '../images/s3.png'
import smg4 from '../images/s4.png'
import smg5 from '../images/s5.png'
import smg6 from '../images/s6.png'
import smg7 from '../images/s7.png'
import smg8 from '../images/s8.png'
import smg9 from '../images/s9.png'
import smg10 from '../images/s10.png'
import previous from '../images/previous.png'
import './Slider.css'

function Slider() {
    function prev(direction) {
        var container = document.getElementById('slidecon');
        if (direction === 'left') {
            container.scrollLeft -= 150;
        } else {
            container.scrollLeft += 150;
        }
    }
    return (
        <>
            <p className='stitle'>Our Professionals Work</p>
            <div className="whole">
                <button className='b12' onClick={() => prev('left')} direction="right"><img src={previous} alt="" className='i0' /></button>
                <div className="slidecon" id='slidecon'>
                    <img src={smg1} alt="" className='slideimg' />
                    <img src={smg2} alt="" className='slideimg' />
                    <img src={smg3} alt="" className='slideimg' />
                    <img src={smg4} alt="" className='slideimg' />
                    <img src={smg5} alt="" className='slideimg' />
                    <img src={smg6} alt="" className='slideimg' />
                    <img src={smg7} alt="" className='slideimg' />
                    <img src={smg8} alt="" className='slideimg' />
                    <img src={smg9} alt="" className='slideimg' />
                    <img src={smg10} alt="" className='slideimg' />
                </div>
                <button className='b120' onClick={() => prev('right')} direction="right"><img src={previous} alt="" className='i00' /></button>
            </div>
        </>
    )
}

export default Slider
