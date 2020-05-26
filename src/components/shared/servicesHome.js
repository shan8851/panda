import React from "react"
import styled from "styled-components"
import { BoldText, Button } from "./sharedComponents.style"

export default function ServicesHome() {
  return (
    <Container>
      <BoldText style={{ paddingBottom: 100 }}>Services</BoldText>
      <div>
        <ServicesGrid>
          <ServicesCol>
            <ColHeader>Save Time</ColHeader>
            <ColText>
              Recruitment outreach takes up a lot of time. We’ll only send you
              worthy profiles, saving you the effort of sifting through
              applications and spending hours on the phone.
            </ColText>
          </ServicesCol>
          <ServicesCol>
            <ColHeader>Reach the Best Candidates</ColHeader>
            <ColText>
              Employer brand awareness can be a significant barrier to
              attracting and hiring top talent. We continually identify and
              build relationships with the best talent and can introduce you to
              stellar candidates whom you might not be able to reach through ads
              and job match services.
            </ColText>
          </ServicesCol>
          <ServicesCol>
            <ColHeader>Scale Up</ColHeader>
            <ColText>
              Whether you need to hire quickly, or you’re looking for someone
              with a niche, our impeccable candidate network means recruitment
              isn’t a hurdle to the pace of scaling your business.
            </ColText>
          </ServicesCol>
        </ServicesGrid>
        <ServicesGrid>
          <ServicesCol>
            <ColHeader>Cast A Wider Net</ColHeader>
            <ColText>
              Smaller businesses need to be creative about how they hire talent.
              Casting your net as widely as possible means you can feel
              confident about the candidates who make it through your hiring
              process. It costs you nothing to review the profiles we send you.
            </ColText>
          </ServicesCol>
          <ServicesCol>
            <ColHeader>Smooth Operators</ColHeader>
            <ColText>
              Your hiring process creates a powerful first impression, for good
              or bad. We’ll help coordinate the process so it runs as smoothly
              as possible.
            </ColText>
          </ServicesCol>
          <ServicesCol>
            <ColHeader>Our Fees</ColHeader>
            <ColText>
              There is no fee for using our services unless you decide to hire
              someone we send your way. Unlike other search firms, our fees
              aren’t calculated as a salary percentage. Instead, we’ll agree a
              fixed-fee for our service, so you have complete certainty and our
              fees never become an obstacle to offering the right compensation
              package to the right candidate.
            </ColText>
          </ServicesCol>
        </ServicesGrid>
      </div>
      <Button style={{ marginTop: 100 }}>Learn More</Button>
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20vh 20vw;
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

const ColHeader = styled.h2`
  font-family: panda-bold;
  font-style: italic;
  font-size: 26px;
`

const ColText = styled.p`
  font-size: 22px;
  font-family: panda;
`
