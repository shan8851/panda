import React from "react"
import Panda from '../images/pandalogo1.png'
import SEO from "../components/shared/seo"
import styled from 'styled-components'
import { Link } from "gatsby"
const Success = () => {
  return (
    <Container>
      <SEO title="Success! Message sent" />
      <Img src={Panda} alt='Logo' />
      <Message>
        Success, your message has been sent, we will get back to you as soon as possible. Click <MessageLink to={'/'}>Here</MessageLink> to go back home.
      </Message>
    </Container>
  )
}

export default Success

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

const Img = styled.img`
  height: 30vh;
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
