import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"
import {
  Heading,
  BodyCopy,
  List,
} from "../components/shared/sharedComponents.style"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading>Why choose Panda?</Heading>
    <BodyCopy>
      Panda has been created to assist business with recruitment in niche
      technology areas. Etc etc etc etc
    </BodyCopy>
    <BodyCopy>
      Panda is a specialist Digital Transformation Recruitment business focusing
      on the following technologies:
    </BodyCopy>
    <List>
      <li>Digital HR Transformation</li>
      <li>Workday</li>
      <li>Success Factors</li>
      <li>Service Now</li>
      <li>Pega</li>
      <li>Salesforce</li>
      <li>Mulesoft</li>
      <li>Integration</li>
    </List>
  </Layout>
)

export default IndexPage
