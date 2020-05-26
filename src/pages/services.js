import React from "react"
import Layout from "../components/shared/layout"
import Contact from "../components/shared/contact"
import SEO from "../components/shared/seo"
import { BoldText, Button } from "../components/shared/sharedComponents.style"
import styled from "styled-components"

const Image = "https://source.unsplash.com/random/800x600"

export default function Services() {
  return (
    <Layout>
      <SEO title="Services" />
      <Container>
        <BoldText style={{ marginBottom: 100 }}>Our Services</BoldText>
        <ServicesGrid>
          <ServicesCol>
            <ColImg src={Image} />
            <ColHeader>Instruct Us</ColHeader>
            <ColText>
              Tell us your hiring needs: the skills, experience and ‘culture
              add’ you’re looking for. We’ll identify top performers in our
              network with the skills and mission-fit your business needs.
            </ColText>
            <ColText>
              Lots of clients hone their selection criteria while the
              application process is underway. That’s OK. Our extensive
              candidate network means that when your needs adapt, so can our
              delivery.
            </ColText>
          </ServicesCol>
          <ServicesCol>
            <ColImg src={Image} />
            <ColHeader>Assess the Candidates</ColHeader>
            <ColText>You consider the candidate profiles we send you.</ColText>
            <ColText>
              We’ve spent 10 years connecting the best digital transformation
              talent to businesses in North America and Europe. Our network
              consists of the best candidates who can’t necessarily be reached
              through job ads. We’re confident that we have the right candidate
              at our fingertips.
            </ColText>
          </ServicesCol>
          <ServicesCol>
            <ColImg src={Image} />
            <ColHeader>Hire the Best</ColHeader>
            <ColText>
              Our fees are only payable if you successfully hire a candidate
              we’ve sent your way.
            </ColText>
            <ColText>
              While other recruitment firms usually charge a percentage of the
              candidate’s salary, we will agree a fixed cost for our services up
              front, so that you have complete certainty about the cost of our
              services.
            </ColText>
          </ServicesCol>
        </ServicesGrid>
        <Button>Make It</Button>
      </Container>
      <Contact />
    </Layout>
  )
}
const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 80vw;
  margin: auto;
  flex-direction: column;
  text-align: center;
`

const ServicesGrid = styled.div`
  display: flex;
  padding-bottom: 20px;
`

const ServicesCol = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px;
`

const ColImg = styled.img``

const ColHeader = styled.h2`
  font-family: panda-bold;
  font-size: 26px;
`

const ColText = styled.p`
  font-size: 22px;
  font-family: panda;
`
