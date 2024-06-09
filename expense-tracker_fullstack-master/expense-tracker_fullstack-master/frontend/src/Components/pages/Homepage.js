import React from 'react'
import avatar from '../../img/avatar.png'
import styled from 'styled-components';

const Homepage = () => {
  return (

    
<NavbarStyled>

<img src='{avatar}' alt=""/>
      <ul>
        <li>Signup</li>
        <li>Login</li>
        <li>Dashboard</li>
        <li>Blogs</li>
      </ul>
  
  <nav>
      <img src='{avatar}' alt=""/>
      <ul>
        <li>Signup</li>
        <li>Login</li>
      </ul>
    </nav>
  
  </NavbarStyled>
    
  )
}

const NavbarStyled = styled.div`
  margin: 45px;
  padding 0rem 0.5rem;
  border: 3px solid #FFFFFF

  #ul{
  width: 300px;
  display: flex;
  flex-direction: row;
  background: #333; rgba(252,246, 249, 0.78)
  
  border: 3px solid #FFFFFF
  hight: 300px;
  }

`;


export default Homepage