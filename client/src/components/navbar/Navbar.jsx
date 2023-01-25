import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, styled, } from '@mui/material';
export const Navbar = () => {
    const Navbar = styled(AppBar)`
    background : #111111;

    `
  const Tabs = styled(NavLink)`
    margin-left : 20px;
    color : white;
    font-size : 20px;
    text-decoration : none;
    `
    const mainDiv = {
        justifyContent : "spaceAround"
    }

  return (
    <div style={{ display: "flex" }}>
    <Navbar position='static' >
      <Toolbar>
        
        <Tabs to="/" >Home</Tabs>
        <Tabs to="/cart">Cart</Tabs>

      </Toolbar>

    </Navbar>
  </div>
  )
}
