import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Logo from "../../images/pandalogo2.png"

const Header = () => (
  <Nav>
    <div>
      <LogoLink to="/">
        <NavLogo src={Logo} />
      </LogoLink>
    </div>
    <div>
      {/* <NavLink activeStyle={activeStyles} to="/">
        HOME
      </NavLink>
      <NavLink activeStyle={activeStyles} to="/about">
        ABOUT
      </NavLink> */}
      <NavLink activeStyle={activeStyles} to="/services">
        SERVICES
      </NavLink>
      <NavLink activeStyle={activeStyles} to="/">
        BLOG
      </NavLink>
    </div>
    <Invisible />
  </Nav>
)

const Nav = styled.nav`
  display: flex;
  min-width: 100vw;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  @media (max-width: 800px) {
    flex-direction: column;
    padding-top: 20px;
  }
  @media (max-width: 450px) {
    justify-content: center;
  }
`

const LogoLink = styled(Link)`
  display: flex;
  margin-left: 20px;
`

const NavLink = styled(props => <Link {...props} />)`
  font-family: panda;
  letter-spacing: 4px;
  margin: 0 10px;
  text-decoration: none;
  color: #000000;
  & :active {
    color: #000000;
  }
  & :hover {
    color: #000000;
  }
  @media (max-width: 580px) {
    font-size: 18px;
  }
  @media (max-width: 430px) {
    font-size: 14px;
  }
`

const Invisible = styled.div`
  height: 120px;
  width: 120px;
`

//active styles
const activeStyles = {
  borderBottom: "2px solid black",
}

const NavLogo = styled.img`
  height: 120px;
  width: 120px;
`

export default Header
