import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledDiv = styled.div`
    display: block;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 5vh;
    width: 100%;
    display: flex;
    font-size: 22px;
    border-top: 1px solid rgba(0, 0, 0, 0.5);
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    padding: 10px 0px;
    background-color: #deebea;
    `
    const Name = styled.div`
    position: relative;
    top: 0px;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    height: 10vh;
    width: 100%;
    color: #93b2c4;
    background-color: #93b2c4;
    `

export default function Navbar() {
    return(
        <div className='navbar'>
            <Name className='tracking-in-expand'>Kevin Clark</Name>
            <StyledDiv>
                <NavLink className='navLink' activeClassName='navLinkActive' exact to='/'>Projects</NavLink>
                <NavLink className='navLink' activeClassName='navLinkActive' exact to='/resume'>Resume</NavLink>
                <NavLink className='navLink' activeClassName='navLinkActive' exact to='/about'>About</NavLink>
            </StyledDiv>
        </div>
    )
}