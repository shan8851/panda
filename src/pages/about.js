import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"
import styled from "styled-components"
import {
  BodyCopy,
  List,
  Heading,
  Container,
} from "../components/shared/sharedComponents.style"
import Panda from "../images/panda.jpg"

export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <Container>
        <Heading center>About </Heading>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Img src={Panda} />
          <BodyCopy>
            I have 10 years of experience in recruitment and for the last 6
            years have specialised in Digital Transformation. Having worked as a
            senior leader in a number of different sized recruitment agencies
            and managing teams of recruiters, I decided to set up Panda, my own
            recruitment business, 3 years ago.
          </BodyCopy>
        </div>
        <BodyCopy>My key strengths are as follows:</BodyCopy>
        <List>
          <li>
            Organised and process driven, providing candidates and customers an
            easy journey and experience
          </li>
          <li>
            Accurate, detail-orientated approach – using my experience in
            recruitment and my extensive candidate network, I am able to
            introduce candidates with the right skill set and personal-fit
            (situation/salary/location) for the role.
          </li>
          <li>
            Speed – I leverage my network and relationships to your advantage.
          </li>
        </List>
        <BodyCopy>
          Transparent communication - years of experience mean that I provide
          ready-screened candidates with all the information needed. There will
          never be any nasty details arise to derail a process.
        </BodyCopy>
        <BodyCopy>
          Transparent pricing - unlike most recruitment agencies, I can provide
          recruitment services at a fixed cost per hire agreed up-front and
          payable only if a candidate is placed with you.
        </BodyCopy>
        <BodyCopy>
          Fixed fees mean you have certainty on your own costs when you engage
          me to find a candidate and I can act genuinely in the interests of my
          client and the candidate when it comes to negotiating salaries at
          offer stage. You know if I tell you a candidate&#39;s expectations
          that the information is only in the interests of the candidate and not
          because an uplift on the candidate&#39;s salary would increase my fee.
        </BodyCopy>
      </Container>
    </Layout>
  )
}

const Img = styled.img`
  width: 300px;
`
