import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"
import { Heading } from "../components/shared/sharedComponents.style"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading>Home Page</Heading>
  </Layout>
)

export default IndexPage
