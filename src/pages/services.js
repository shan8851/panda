import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"
import {
  Heading,
  BodyCopy,
  Container,
} from "../components/shared/sharedComponents.style"
import Pic from "../images/meeting.svg"

export default function Services() {
  return (
    <Layout>
      <SEO title="Services" />
      <Container>
        <Heading center>Services </Heading>
        <img src={Pic} />
        <BodyCopy>
          When working in niche technology areas, good candidates are passive -
          generally they are well- looked after by their current employers or
          are busy on projects. As a result, job adverts and passive marketing
          for vacancies yield limited success and rarely attract the most
          outstanding market talent.
        </BodyCopy>
        <BodyCopy>
          I have spent many years developing and maintaining a fantastic network
          of candidates that I can leverage to my clients&#39; benefit. Only by
          building and maintaining relationships with these passive candidates
          can I provide my clients with resumes they wouldn&#39;t otherwise find
          themselves.
        </BodyCopy>
        <BodyCopy>
          The candidates that I can introduce are not the same candidates as
          those applying to job advertisements. Fundamentally, I do not scout
          candidates through paid-for-advertising (unlike most recruitment
          agencies) because I do not see the value to my clients in introducing
          candidates that they could otherwise find themselves. I want to work
          in collaboration with your internal recruitment functions and provide
          you with resumes you wouldn&#39;t otherwise have the chance to review.
        </BodyCopy>
      </Container>
    </Layout>
  )
}
