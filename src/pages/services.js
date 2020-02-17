import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"
import {
  Heading,
  BodyCopy,
} from "../components/shared/sharedComponents.style"
import styled from "styled-components"
import { Link } from "gatsby"

export default function Services() {
  return (
    <Layout>
      <SEO title="Services" />
      <Container>
        <Heading center>METHOD</Heading>
        <BodyCopy>
          At Panda, we do things differently. Unlike large recruitment agencies, we don’t rely on databases of candidates compiled from online advertising. Our clients can readily reach candidates actively looking for vacancies through advertising themselves. Instead, we focus on introducing our clients to outstanding marketing talent that can’t be reached through online vacancy adverting and job match services.
        </BodyCopy>
        <BodyCopy>
          We continually strive to identify and build relationships with top performers working in digital transformation and every single candidate in our network has been approached and assessed by us directly.
        </BodyCopy>
        <Heading center>BRAND</Heading>
        <BodyCopy>
          Our brand is defined by our mission to simplify recruitment. We’re honest, we value integrity, we don’t oversell candidates. Our clients trust our judgment and advice.
        </BodyCopy>
        <Heading center>MISSON</Heading>
        <BodyCopy>
          We listen to your needs and we find candidates with the skill-set and mission-fit you’re looking for.

          We want to make talent resourcing simple and efficient, so our clients can focus on other business needs.

          We provide recruitment services at a fixed cost per hire, agreed up-front, and payable only if we introduce you to the candidate you’ve been looking for.

        </BodyCopy>
        <ContactLink>CONTACT US FOR A COPY OF OUR CORPORATE BROCHURE</ContactLink>
      </Container>
    </Layout>
  )
}
const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
`
const ContactLink = styled(Link)`
 color: #D86386;
 font-family: panda-bold;
 text-decoration: none;
 margin-top: 20px;
 font-size: 30px;
 text-align: center;
 @media (max-width: 700px) {
    font-size: 24px;
  }
`
