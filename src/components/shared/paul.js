import React from "react"
import Image from "../../images/paul.png"
import styled from "styled-components"

export default function Paul() {
  return (
    <Container>
      <AboutWrap>
        <AboutHeader>PAUL ANDERSON</AboutHeader>
        <AboutText>
          I founded PANDA after spending over a decade as a senior leader in
          larger agencies.
        </AboutText>
        <AboutText>
          PANDA is a boutique firm geared towards the highest standards of
          delivery and service. We understand your business, we listen to your
          needs and we deliver profiles for candidates who fit your mission.
        </AboutText>
        <AboutText>
          We focus on introducing you to outstanding talent that can’t be
          reached through online ads and job match services.
        </AboutText>
      </AboutWrap>
      <Img src={Image} />
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 20vh 20vw;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const Img = styled.img`
  height: 500px;
  margin-left: -20px;
`

const AboutWrap = styled.div`
  background-color: white;
  height: 450px;
  margin: 30px 0;
  z-index: 1000;
  justify-content: center;
`

const AboutHeader = styled.h1`
  font-family: panda-bold;
  font-size: 38px;
  text-align: left;
`

const AboutText = styled.p`
  font-family: panda;
  text-align: left;
`
