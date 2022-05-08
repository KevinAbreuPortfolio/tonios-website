import React from 'react'
import { NavBar } from './components/Navbar/navBar'
import { Top } from './components/Top/top'
import { About } from './components/About/about'
import { Menu } from './components/Menu/menu'

const Home = () => {
  return (
    <>
    <NavBar />
    <Top/>
    <About/>
    <Menu/>
    {/* <Chefs/> */}
    {/* <Reservation/> */}
    {/* <Offer/> */}
    {/* <Footer/> */}
    
    </>
  )
}

export default Home