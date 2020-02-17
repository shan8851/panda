import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"
import styled from "styled-components"
import RoundLogo from "../images/pandalogo2.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
     <img src={RoundLogo}  alt="logo"/>
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
  padding: 20px;
`
