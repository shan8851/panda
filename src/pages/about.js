import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"
import { Heading } from "../components/shared/sharedComponents.style"

export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <Heading>About Page</Heading>
    </Layout>
  )
}
