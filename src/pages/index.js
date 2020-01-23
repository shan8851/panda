import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"
import {
  Heading,
  BodyCopy,
  List,
} from "../components/shared/sharedComponents.style"
import styled from "styled-components"
import Pic from "../images/profile.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Heading>Why choose Panda?</Heading>
      <img src={Pic} />
      <BodyCopy>
        Panda has been created to assist business with recruitment in niche
        technology areas. Etc etc etc etc
      </BodyCopy>
      <BodyCopy>
        Panda is a specialist Digital Transformation Recruitment business
        focusing on the following technologies:
      </BodyCopy>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <List>
          <li>Digital HR Transformation</li>
          <li>Workday</li>
          <li>Success Factors</li>
          <li>Service Now</li>
        </List>
        <List>
          <li>Pega</li>
          <li>Salesforce</li>
          <li>Mulesoft</li>
          <li>Integration</li>
        </List>
      </div>
      <BodyCopy>
        We provide recruitment services in Europe and North America.
      </BodyCopy>
    </Container>
  </Layout>
)

export default IndexPage

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
