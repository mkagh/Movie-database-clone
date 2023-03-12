import React, { useEffect, useRef, useState } from 'react'
import Logo from "../images/logo.jfif"
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';
import { useGlobalContext } from '../context';
import { Link } from "react-router-dom"
import Session from "../cookies"
import { useLocation } from 'react-router-dom';

const Navbar = ({ tvOrMovie, searchArr }) => {
    /*     const location = useLocation()
        console.log(location.pathname,) */
    let session = new Session()

    const { setSliderHeight, isModal, isNoModal, showModal } = useGlobalContext()
    const [navbarHeight, setNavbarHeight] = useState(0)
    const [searchedTerms, setSearchedTerms] = useState([])
    const [showSearch, setShowSearch] = useState(true)

    let navbar = useRef(null)
    let refInput = useRef("")
    const newArr = []
    tvOrMovie.map((tom) => {
        const { qid } = tom
        newArr.push(qid)
    })
    const finalArr = [...new Set(newArr), "top 5"]
    useEffect(() => {

        setTimeout(() => {

            const navHeight = navbar.current.getBoundingClientRect().height

            let newsliderHeight = window.innerHeight - navHeight
            setSliderHeight(newsliderHeight)
            setNavbarHeight(navHeight + "px")
        }, 10)
    }, [])
    return (
        <div ref={navbar} className='navbar'>
            <div className="logo" style={{ "width": "50px", height: "50px" }}>
                <img style={{ "width": "100%", height: "100%" }} src={Logo} alt="" />
            </div>
            <div className="search-bar">
                <input disabled={showModal ? true : false} ref={refInput} onChange={() => {

                    setShowSearch(true)
                    const filtered = searchArr.filter((item) => {
                        const { l } = item
                        if (refInput.current.value.length !== 0) {
                            return (
                                l.toLowerCase().includes(refInput.current.value)
                            )

                        }
                        else return false
                    })
                    setSearchedTerms(filtered)


                }} type="text" />
            </div>
            <div onClick={isModal} className="menu">
                <i><GiHamburgerMenu /></i>
            </div>
            <div className="signout" style={{ textAlign: "center" }}>

                <p onClick={() => {
                    session.destroySession()
                    window.location.href = "/login"
                }} style={{ color: "white" }}>Sign out</p>
            </div>


            <div style={{ top: navbarHeight }} className={showModal ? "modal" : "no-show"}>
                <div className="modal-wrapper">
                    {finalArr.map((fa, index) => {
                        if (fa !== undefined) {

                            return (
                                <Link key={index} onClick={isNoModal} to={`/${fa}`}><h5>{fa.charAt(0).toUpperCase() + fa.slice(1)}</h5></Link>
                            )
                        }
                    })}

                    <Link onClick={isNoModal} to={`/byYear`}><h5>Browse by year</h5></Link>
                    <Link onClick={isNoModal} to={`/actors`}><h5>Actors</h5></Link>
                    <Link onClick={isNoModal} to={`/wishlist`}><h5>Wishlist</h5></Link>

                </div>
                <div className='iconDiv' onClick={isNoModal}>   <i><RxCross1 /></i></div>
            </div>
            <div style={{ top: navbarHeight, display: `${searchedTerms.length === 0 ? "none" : "block"}` }} className={`${showSearch ? "searched-terms" : "no-show"}`}>
                {searchedTerms.map((oneItem) => {
                    const { qid, l, id } = oneItem
                    return (
                        <p onClick={() => {
                            setShowSearch(false)
                        }} key={id}>
                            <Link style={{ color: 'white', textDecoration: 'none' }} to={`${qid}/${l}`}> {oneItem.l}</Link>
                        </p>
                    )
                })}
            </div>
        </div>
    )
}
export default Navbar