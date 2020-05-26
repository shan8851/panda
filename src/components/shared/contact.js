import React from "react"
import styled from "styled-components"
import { BoldText, Button } from "./sharedComponents.style"

export default function Contact() {
  return (
    <Container>
      <div>
        <BoldText>Let's Talk</BoldText>
        <Button style={{ marginTop: 75 }}>Schedule a Call</Button>
      </div>
      <ContactRow>
        <ContactCol>
          <h1>Contact</h1>
          <ContactLink href="tel:447528204883">(0044) 7528 204 883</ContactLink>
          <ContactLink href="mailto:paul.anderson@pandasearch.co.uk">
            paul.anderson@pandasearch.co.uk
          </ContactLink>
        </ContactCol>
        <ContactCol>
          <h1>Follow</h1>
          <ContactLink href="https://www.linkedin.com/in/paulanderson9/">
            LinkedIn
          </ContactLink>
        </ContactCol>
      </ContactRow>
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20vh 20vw;
  text-align: center;
`

const ContactRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ContactCol = styled.div`
  display: flex;
  flex-direction: column;
`

const ContactLink = styled.a`
  font-family: panda;
  text-decoration: none;
  color: black;
`
