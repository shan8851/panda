import React from "react"
import SEO from "../components/shared/seo"
import Panda from '../images/pandalogo2.png'
import styled from 'styled-components'
import { Link } from "gatsby"
import '../components/shared/layout.css'
import '../../static/fonts/font.css'
const NotFoundPage = () => (
  <Container>
    <SEO title="404: Not found" />
    <Img src={Panda} alt='Logo' />
    <Message>
      Oops. That page doesn't seem to exist. Click <MessageLink to={'/'}>Here</MessageLink> to go back home.
    </Message>
  </Container>
)

export default NotFoundPage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #EFEDE1;
  padding: 0 2%;
`

const Img = styled.img`
  height: 30vh;
  width: auto;
`

const Message = styled.p`
  font-family: panda;
  font-size: 24px;
  color: black;
`

const MessageLink = styled(Link)`
  text-decoration: none;
  color: #D86386;
  font-size: 24px;
  font-family: panda-bold;
`
