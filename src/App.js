import React, { useState, useEffect } from 'react'
import { images } from './data';
import './scss/style.css';
import Landing from './pages/Landing';
import Actors from './pages/Actors';
import Actor from './pages/Actor';
import ByYear from './pages/ByYear';
import OneMotionPicture from './pages/OneMotionPicture';
import Register from './pages/getIn/Register';
import Login from './pages/getIn/Login';
import OneYear from './pages/OneYear';
import Navbar from './components/Navbar';
import Loading from './components/Loading.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TvOrMovie from './pages/TvOrMovie';
// import Wishlist from './pages/Wishlist';



function App() {
  const [arr, setArr] = useState([])
  const [pictures, setPictures] = useState(images)

  const fetchMovies = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2d3466daabmshe3eb39021cd25e2p1a59ebjsn864e8d0d14b1',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
      }
    };

    fetch('https://imdb8.p.rapidapi.com/auto-complete?q=dark', options)
      .then(response => response.json())
      .then(response => setArr(response.d))
      .catch(err => console.error(err));
  }
  useEffect(() => {
    fetchMovies()
    console.log(arr)
  }, [])
  if (arr.length === 0) {
    return (
      <Loading />
    )
  }

  return (
    <Router>
      <Navbar tvOrMovie={arr} searchArr={arr} />
      <Routes>
        <Route path='/' element={<Landing images={pictures} tvOrMovie={arr} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/:id' element={<TvOrMovie tvMovieArr={arr} />} />
        <Route path='/:id/:name' element={<OneMotionPicture OneMotionPictureArr={arr} />} />
        <Route path='/byYear' element={<ByYear />} />
        <Route path='/byYear/:id' element={<OneYear forYearsArr={arr} />} />
        <Route path='/actors' element={<Actors actors={arr} />} />
        {/* <Route path='/wishlist' element={<Wishlist  actors={arr}   />} /> */}
        <Route path='/actors/:actor' element={<Actor actors={arr} />} />
      </Routes>
    </Router>
  )
  /* kako da napravim vise pathova sa istim :id? */
}

export default App;
