import React, { useState } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useGlobalContext } from '../context';
import Session from "../cookies"
import { Link } from 'react-router-dom'

const Landing = ({ images, tvOrMovie }) => {

    const { isNoModal, showModal } = useGlobalContext()

    let session = new Session()
    let getCookie = session.getSession()


    if (getCookie === "") {
        window.location.href = "/login"
    }
    const [index, setIndex] = useState(0)
    const newArr = []
    tvOrMovie.map((tom) => {
        const { qid } = tom
        newArr.push(qid)
    })
    const finalArr = [...new Set(newArr), "top 5"]
    const { sliderHeight } = useGlobalContext()
    return (
        <div className='wrapper'>
            <i className='left-icon' onClick={() => {

                if (index === images.length - 1) {
                    return setIndex(0)
                } else {
                    return setIndex(index + 1)
                }
            }}><FiChevronLeft /></i>
            <div className="slider" style={{ height: sliderHeight + "px" }}>
                {images.map((image, compIndex) => {
                    let position = "next";
                    if (compIndex === index) {
                        position = "current"
                    }
                    else if (compIndex === index - 1 || (compIndex === images.length - 1 && index === 0)) {
                        position = "previous"
                    }
                    return <div key={compIndex} className={position}>
                        <img src={image} alt="" />
                    </div>
                }
                )}
            </div>
            <i className='right-icon' onClick={() => {

                if (index === images.length - 1) {
                    return setIndex(0)
                } else {
                    return setIndex(index + 1)
                }
            }}><FiChevronRight /></i>

            <div className={showModal ? "modal" : "no-show"}>
                <div className="modal-wrapper">
                    {finalArr.map((fa) => {
                        return (
                            <Link to={`/${fa}`}><h5>{fa}</h5></Link>
                        )
                    })}

                    <Link to={`/byYear`}><h5>browse bz year</h5></Link>
                    <Link to={`/actors`}><h5>actors</h5></Link>
                    <Link to={`/wishlist`}><h5>wishlist</h5></Link>

                </div>
                <p onClick={isNoModal}>X</p>
            </div>
        </div>
    )
}


export default Landing