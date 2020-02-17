import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"
import styled from "styled-components"
import {
  Heading,
} from "../components/shared/sharedComponents.style"
import Paul from "../images/paul.png"

export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <Container>
          <Col>
            <Heading>PAUL ANDERSON </Heading>
            <Copy>
              I am a specialist Digital Transformation recruiter. I founded Panda in 2016, after working as a senior leader in recruitment agencies and managing teams of recruiters for over a decade. My approach to head-hunting is far-removed from typical recruitment agencies. I represent my clients with passion and honesty and my approach to candidates is led by integrity.
            </Copy>
          </Col>
          <Img src={Paul} />
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 2%;
  @media (max-width: 830px) {
    flex-direction: column;
  }
`
 const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
`

const Copy = styled.p`
  font-family: panda;
  margin-right: 50px;
  line-height: 50px;
  letter-spacing: 3px;
  @media (max-width: 830px) {
    margin-top: 20px;
    margin-right: 0;
  }
  @media (max-width: 500px) {
    line-height: 40px;
    letter-spacing: 2px;
  }
`

const Img = styled.img`
  height: 500px;
`
