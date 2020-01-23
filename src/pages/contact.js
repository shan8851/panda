import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"
import { Heading, Container } from "../components/shared/sharedComponents.style"
import styled from "styled-components"
import { FaFileExcel } from "react-icons/fa"

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact" />
      <Container>
        <Heading>Contact Us</Heading>
        <Wrapper>
          <Info>
            <Title>Get In Touch</Title>
            <div style={{ marginBottom: 10 }}>
              <BoldText>+44(0) 1234 567 890</BoldText>
              <BoldText>email@email.com</BoldText>
            </div>
            <div style={{ marginBottom: 10 }}>
              <RegText>Address line 1</RegText>
              <RegText>Address line 2</RegText>
              <RegText>Address line 3</RegText>
              <RegText>Address line 4</RegText>
              <RegText>Address line 5</RegText>
            </div>
          </Info>
          <Form>
            <div style={{ display: "flex", alignItems: "center" }}>
              <BoldText style={{ width: "25%" }} white>
                Name:
              </BoldText>
              <ShortField
                style={{ width: "65%" }}
                type="text"
                placeholder="Click to type..."
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <BoldText style={{ width: "25%" }} white>
                Email:
              </BoldText>
              <ShortField
                style={{ width: "65%" }}
                type="text"
                placeholder="Click to type..."
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <BoldText style={{ width: "25%" }} white>
                Message:
              </BoldText>
              <LongField
                style={{ width: "65%" }}
                type="text"
                placeholder="Add message..."
              />
            </div>
            <div
              style={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SubmitButton>SUBMIT</SubmitButton>
            </div>
          </Form>
        </Wrapper>
      </Container>
    </Layout>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 80%;
  flex-grow: 1;
  margin: auto;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 360px;
  background-color: white;
  padding-left: 20px;
  padding-top: 10px;
  border: 3px solid black;
  margin: auto;
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 360px;
  padding-top: 10px;
  border: 3px solid black;
  background-color: black;
  padding-left: 20px;
  margin: auto;
`

const Title = styled.h2`
  color: ${props => (props.white ? "#ffffff" : "#000000")};
  margin: 0;
  padding: 10px 0;
  font-family: panda-bold;
`
const BoldText = styled.p`
  color: ${props => (props.white ? "#ffffff" : "#000000")};
  margin: 0;
  padding: 0;
  font-family: panda-bold;
`

const RegText = styled.p`
  color: ${props => (props.white ? "#ffffff" : "#000000")};
  margin: 0;
  padding: 0;
  font-family: panda;
`

const ShortField = styled.input`
  background-color: #fff;
  color: #000;
  font-family: panda-bold;
  border: none;
  border-bottom: 3px solid white;
  margin: 10px;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-family: panda-bold;
    color: #000;
  }
  :-ms-input-placeholder {
    color: #000;
  }
`

const LongField = styled.textarea`
  background-color: #fff;
  color: #000;
  font-family: panda-bold;
  border: none;
  border-bottom: 3px solid white;
  margin: 10px;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-family: panda-bold;
    color: #000;
  }
  :-ms-input-placeholder {
    color: #000;
  }
`

const SubmitButton = styled.button`
  background-color: #ffffff;
  height: 50px;
  width: 220px;
  font-family: panda-bold;
`
