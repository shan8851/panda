import React from "react"
import Header from "./header"
import styled from "styled-components"
import "./layout.css"
import "../../../static/fonts/font.css"

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
  flex-direction: column;
  background-color: #EFEDE1;
`

export default Layout
