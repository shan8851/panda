import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"
import styled from "styled-components"
import Contact from "../components/shared/contact"
import Paul from "../components/shared/paul"
import ServicesHome from "../components/shared/servicesHome"
import { BoldText } from "../components/shared/sharedComponents.style"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Main>
        <div>
          <BoldText style={{ marginBottom: 100 }}>
            Hire the best talent in digital transformation. Grow your business.
            Get ahead.
          </BoldText>
          <CtaText>Let us find your next hire</CtaText>
        </div>
        <BoldText>
          We’ll connect you to professionals with the skills and experience your
          business needs.
        </BoldText>
      </Main>
      <ServicesHome />
      <Paul />
      <Contact />
    </Container>
  </Layout>
)

export default IndexPage

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  text-align: center;
  margin: auto;
`

const Main = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20vh 30vw;
`

const CtaText = styled.a`
  text-decoration: underline;
  font-size: 30px;
  font-family: panda;
`
