import React from "react"
import Header from "./header"
import Footer from "./footer"
import styled from "styled-components"
import "./layout.css"
import "../../../static/fonts/font.css"

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
  flex-direction: column;
`

const Main = styled.div`
  padding: 2% 2%;
  flex-grow: 1;
`

export default Layout
