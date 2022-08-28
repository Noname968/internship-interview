import React from 'react'
import './customer.css'
import img55 from "../images/img5.png"
import star from '../images/star.png'
import Records from '../urbanExpertCleaning-common.json'

function Customerreviews() {
    const { reviews } = Records[0];
    return (
        <>
            <div className='custcon'>
                <div className="firstcon">
                    <p className="titlecust">Customer reviews</p>
                    <p className="subtit">Avg. user rating</p>
                    <p className='star'> <img src={star} alt="" className='starimg' /> 4.76</p>
                    <p className='totre'>347K reviews</p>
                </div>

                {reviews.map((review) => (
                    <>
                        <div className="sec">
                            <div className="secondcon">
                                <div className="subfirst">
                                    <img src={img55} alt="" className="img55" />
                                    <div className='subfirstcon'>
                                        <p className="sf1">{review.custName}</p>
                                        <p className='sf2'>July 2022 • Noida, Uttar Pradsh 201301, India</p>
                                    </div>
                                    <p className='starcorner'><img src={star} alt="" className='starimg2' /> {review.rating}</p>
                                </div>
                                <p className='low'>{review.review}</p>
                            </div>
                        </div>
                        <div className="sec">
                            <div className="secondcon">
                                <div className="subfirst">
                                    <img src={img55} alt="" className="img55" />
                                    <div className='subfirstcon'>
                                        <p className="sf1">Vijay</p>
                                        <p className='sf2'>July 2022 • Noida, Uttar Pradsh 201301, India</p>
                                    </div>
                                    <p className='starcorner'><img src={star} alt="" className='starimg2' /> 5</p>
                                </div>
                                <p className='low'>Good Knowledge of his job, hard working and well mannered</p>
                            </div>
                        </div>
                    </>
                ))}
                <div className="sec">
                    <div className="secondcon">
                        <div className="subfirst">
                            <img src={img55} alt="" className="img55" />
                            <div className='subfirstcon'>
                                <p className="sf1">Vijay</p>
                                <p className='sf2'>July 2022 • Noida, Uttar Pradsh 201301, India</p>
                            </div>
                            <p className='starcorner'><img src={star} alt="" className='starimg2' /> 5</p>
                        </div>
                        <p className='low'>Good Knowledge of his job, hard working and well mannered</p>
                    </div>
                </div>
                <div className="sec">
                    <div className="secondcon">
                        <div className="subfirst">
                            <img src={img55} alt="" className="img55" />
                            <div className='subfirstcon'>
                                <p className="sf1">Vijay</p>
                                <p className='sf2'>July 2022 • Noida, Uttar Pradsh 201301, India</p>
                            </div>
                            <p className='starcorner'><img src={star} alt="" className='starimg2' /> 5</p>
                        </div>
                        <p className='low'>Good Knowledge of his job, hard working and well mannered</p>
                    </div>
                </div>
                <div className="sec">
                    <div className="secondcon">
                        <div className="subfirst">
                            <img src={img55} alt="" className="img55" />
                            <div className='subfirstcon'>
                                <p className="sf1">Vijay</p>
                                <p className='sf2'>July 2022 • Noida, Uttar Pradsh 201301, India</p>
                            </div>
                            <p className='starcorner'><img src={star} alt="" className='starimg2' /> 5</p>
                        </div>
                        <p className='low'>Good Knowledge of his job, hard working and well mannered</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Customerreviews
