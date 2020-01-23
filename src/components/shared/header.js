import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Logo from "../../images/panda.jpg"

const Header = () => (
  <Nav>
    <div>
      <LogoLink to="/">
        <NavLogo src={Logo} />
        <LogoFont>Panda Search</LogoFont>
      </LogoLink>
    </div>
    <div>
      <NavLink activeStyle={activeStyles} to="/">
        Home
      </NavLink>
      <NavLink activeStyle={activeStyles} to="/about">
        About
      </NavLink>
      <NavLink activeStyle={activeStyles} to="/services">
        Services
      </NavLink>
      <NavLink activeStyle={activeStyles} to="/contact">
        Contact
      </NavLink>
    </div>
  </Nav>
)

const Nav = styled.nav`
  display: flex;
  min-width: 100vw;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  height: 80px;
  padding: 0 20px;
  @media (max-width: 450px) {
    justify-content: center;
  }
`

const LogoFont = styled.h1`
  margin: 0;
  @media (max-width: 800px) {
    display: none;
  }
`

const LogoLink = styled(Link)`
  display: flex;
  font-family: panda-bold;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
  margin-left: 20px;
  @media (max-width: 450px) {
    display: none;
  }
`

const NavLink = styled(props => <Link {...props} />)`
  font-family: panda-bold;
  font-weight: 800;
  margin: 0 10px;
  text-decoration: none;
  color: #ffffff;
  & :active {
    color: #fff;
  }
  & :hover {
    color: #fff;
  }
  @media (max-width: 580px) {
    font-size: 18px;
  }
`

//active styles
const activeStyles = {
  borderBottom: "4px solid white",
}

const NavLogo = styled.img`
  height: 50px;
  margin: 0;
  padding-right: 10px;
`

export default Header
