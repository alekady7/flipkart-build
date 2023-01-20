import React from 'react'
import Carousel from './components/Carousel/Carousel'
import Categories from './components/Categories/Categories'
import Navbar from './components/Navbar/Navbar'

function Home() {
  return (
    <div className='home'>
        <Navbar />
        <Categories />
        <Carousel />
    </div>
  )
}

export default Home