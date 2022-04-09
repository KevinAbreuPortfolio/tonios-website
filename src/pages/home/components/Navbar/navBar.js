import React from 'react'
import { NavContainer, LogoContainer, NavLinks } from './navElements'
import logo from '../../../../assets/tonios.png'

export const NavBar = () => {
  return (
    <>
    <NavContainer>
        <LogoContainer>
          <img src={logo} alt='Tonios logo'></img>
        </LogoContainer>
          <NavLinks>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Chefs</li>
            <li>Contact Us</li>
          </NavLinks>
    </NavContainer>
    </>
  )
}
